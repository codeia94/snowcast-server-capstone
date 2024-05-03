exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('trail_map').del()
  await knex('trail_map').insert([
    {
			mountain_id: 1,
			trailmap: 'grouse-map.jpeg'
		},
		{
			mountain_id: 2,
			trailmap: 'bigwhite-map.jpeg'
		},
		{
			mountain_id: 3,
			trailmap: 'sunpeaks-map.jpeg'
		},
		{
			mountain_id: 4,
			trailmap: 'cypress-eagle-map.jpeg'
		},
		{
			mountain_id: 4,
			trailmap: 'cypress-lion-map.jpeg'
		},
		{
			mountain_id: 5,	
			trailmap: 'whistler-map.jpeg'
		},
		{
			mountain_id: 6,
			trailmap: 'lakelouise-map.jpeg'
		},
		{
			mountain_id: 7,
			trailmap: 'sunshine-goatseye-map.jpeg'
		},
		{
			mountain_id: 7,
			trailmap: 'sunshine-lookout-map.jpeg'
		},
		{
			mountain_id: 7,
			trailmap: 'sunshine-standish-map.jpeg'
		},
		{
			mountain_id: 8,
			trailmap: 'mtseymour-map.jpeg'
		},
  ]);
};
