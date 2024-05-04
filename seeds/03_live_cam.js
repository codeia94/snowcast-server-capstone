exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('live_cam').del()
  await knex('live_cam').insert([
    {
			mountain_id: 1,
			cam_url: '',
			title: 'Grouse Live Cam'
		},
		{
			mountain_id: 2,
			cam_url: '',
			title: 'Big White Live Cam'
		},
		{
			mountain_id: 3,
			cam_url: '',
			title: 'Sun Peaks Live Cam'
		},
		{
			mountain_id: 4,
			cam_url: 'https://www.youtube.com/embed/GTQQdQ8VVKI?si=QtT6luyZz5vWujx3',
			title: 'Cypress Live Cam'
		},
		{
			mountain_id: 5,
			cam_url: '//player.brownrice.com/embed/whistlersnowstack',
			title: 'Whistler Live Cam'
		},
		{
			mountain_id: 6,
			cam_url: '',
			title: 'Lake Louise Live Cam'
		},
		{
			mountain_id: 7,
			cam_url: 'https://www.youtube.com/embed/mStghtD0YNk?si=WPR2DszGjp7TifG6',
			title: 'Banff Sunshine Live Cam'
		},
		{
			mountain_id: 8,
			cam_url: 'https://www.youtube.com/embed/vLawo-FrBKk?si=kW7BS50a8hPOjNgJ',
			title: 'Mt Seymour Live Cam'
		},
	]);
};