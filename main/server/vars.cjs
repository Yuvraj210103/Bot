module.exports = {
	neededRanks: {
		login: 0,

		health: 1,
		workingStatus: 1,
		latest_version: 1,
		version: 1,
		proxiesStats: 1,
		video_details: 1,
		view_stats: 1,
		video_info: 1,
		view_workers_stats: 1,
		view_extensions: 1,
		//patreon_status: 1,
		//free_status: 1,

		videos: 2,
		proxies: 2,
		settings: 2,

		add_job: 3, //** NOT IMPLEMENTED **\\
		remove_job: 3, //** NOT IMPLEMENTED **\\
		edit_job: 3, //** NOT IMPLEMENTED **\\

		change_settings: 4,
		change_password: 4
	},

	defaultServerInfo: {
		server_port: 6554,
		close_server_on_finish: false,
		concurrency: 3,
		concurrencyInterval: 20,
		stop_spawning_on_overload: true,
		send_reminders: true,

		headless: false,
		auto_skip_ads: true,

		max_seconds_ads: 30,
		skip_ads_after: [25, 75],

		timeout: 60,
		disable_proxy_tests: false,
		proxy_tests_headless: false,
		default_proxy_protocol: 'http',
		api_key: '',
		free_api_key: '',

		use_AV1: false
	}
};
