exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('trail_map').del()
  await knex('trail_map').insert([
    {
			mountain_id: 1,
			trailmap: 'grouse-map.jpeg',
			trail_name: 'Grouse Mountain'
		},
		{
			mountain_id: 2,
			trailmap: 'bigwhite-map.jpeg',
			trail_name: 'Big White'
		},
		{
			mountain_id: 3,
			trailmap: 'sunpeaks-map.jpeg',
			trail_name: 'Sun Peaks'
		},
		{
			mountain_id: 4,
			trailmap: 'cypress-eagle-map.jpeg',
			trail_name: 'Cypress Black Mountain'
		},
		{
			mountain_id: 4,
			trailmap: 'cypress-lion-map.jpeg',
			trail_name: 'Cypress Mount Strachan'

		},
		{
			mountain_id: 5,	
			trailmap: 'whistler-map.jpeg',
			trail_name: 'Whistler Blackcomb'
		},
		{
			mountain_id: 6,
			trailmap: 'lakelouise-map.jpeg',
			trail_name: 'Lake Louise'
		},
		{
			mountain_id: 7,
			trailmap: 'sunshine-goatseye-map.jpeg',
			trail_name: "Goat's Eye Mountain"
		},
		{
			mountain_id: 7,
			trailmap: 'sunshine-lookout-map.jpeg',
			trail_name: 'Lookout Mountain'
		},
		{
			mountain_id: 7,
			trailmap: 'sunshine-standish-map.jpeg',
			trail_name: 'Mount Standish'
		},
		{
			mountain_id: 8,
			trailmap: 'mtseymour-map.jpeg',
			trail_name: 'Mount Seymour'
		},
  ]);
};
