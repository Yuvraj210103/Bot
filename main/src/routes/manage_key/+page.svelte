<script lang="ts">
	import { opts, dataChanged, newData } from '../../background.js';

	let data = opts;
	dataChanged((newData: any) => (data = newData));
	$: newData(data);

	$: changeAPIKey(data.api_key);
	$: changeFreeAPIKey(data.free_api_key);

	let isFreeLoggedIn = false;
	let isPremiumLoggedIn = false;

	function navigate() {
		if (isFreeLoggedIn || isPremiumLoggedIn) {
			window.location.href = '/';
		}
	}

	async function checkPremiumLoginStatus() {
		isPremiumLoggedIn = true;
	}

	function changeAPIKey(newAPIKey: string) {
		data.api_key = newAPIKey;
	}

	function changeFreeAPIKey(newAPIKey: string) {
		data.free_api_key = newAPIKey;
	}

	setInterval(() => {
		checkPremiumLoginStatus().catch((err) => {});
		navigate();
	}, 100);
</script>


