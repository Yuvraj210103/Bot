const axios = require('axios');

async function updatePremiumRank() {
	global.premium = true;
	global.checkedStatus = true;
}

async function updateFreeRank() {
	let hasFreeKey = false;

	global.free_key = hasFreeKey;
	global.checkedStatus = true;
}

setTimeout(updatePremiumRank, 1000 * 60 * 15);
setTimeout(updateFreeRank, 1000 * 60 * 15);
updatePremiumRank();
updateFreeRank();

let lastKey = settings.api_key;
let lastFreeKey = settings.free_api_key;

global.premiumOnlyTitle = 'Are you sure?';
global.premiumText = ``;

module.exports = async (req, res) => {
	settings = req.body;
	settings.api_key = settings.api_key.trim();
	settings.free_api_key = settings.free_api_key.trim();

	if (lastKey !== settings.api_key) {
		lastKey = settings.api_key;
		updatePremiumRank();
	}

	if (lastFreeKey !== settings.free_api_key) {
		lastFreeKey = settings.free_api_key;
		updateFreeRank();
	}

	if (!global.premium) {
		if (settings.concurrency > 3) {
			/* await MessageUser({
				title: premiumOnlyTitle,
				text: `To be able to have more than 3 concurrect workers, \n${premiumText}`,

				button1text: 'OK',

				secondButton: false
			}); */
			//settings.concurrency = 3;
		}

		if (settings.auto_skip_ads == false) {
			/* await MessageUser({
				title: premiumOnlyTitle,
				text: `To be able to watch the ads, \n${premiumText}`,

				button1text: 'OK',

				secondButton: false
			}); */
			//settings.auto_skip_ads = true;
		}

		if (settings.use_AV1 == true) {
			/* await MessageUser({
				title: premiumOnlyTitle,
				text: `To be able to use AV1, \n${premiumText}`,

				button1text: 'OK',

				secondButton: false
			}); */
			//settings.use_AV1 = false;
		}
	}

	dbRunWithValues('UPDATE options SET data = ? WHERE id = 1', JSON.stringify(settings));
	res.sendStatus(201);

	io.emit('settings', settings);
};
