exports.seed = async function(knex) {
  // Deletes ALL existing entries
	await knex('mountains').del();
	await knex('mountains').insert([
		{ 
			name: 'Grouse', 
			lat: 49.38499846, 
			lon: -123.07249971, 
			province: 'BC',
			country: 'Canada',
			img: 'grouse.jpeg'
		},
		{ 
			name: 'Big White', 
			lat: 49.721944, 
			lon: -118.928889,
			province: 'BC',
			country: 'Canada',
			img: 'bigwhite.jpeg'
		},
		{ name: 'Sun Peaks', 
			lat: 50.893889, 
			lon: -119.893056,
			province: 'BC',
			country: 'Canada',
			img: 'sunpeaks.jpeg'
		},
		{
			name: 'Cypress Mountain',
			lat: 49.325498698,
			lon: -122.803663452,
			province: 'BC',
			country: 'Canada',
			img: 'cypress.jpeg'
		},
		{
			name: 'Whistler Blackcomb',
			lat: 50.075499698,
			lon: -122.86916319,
			province: 'BC',
			country: 'Canada',
			img: 'whistler.jpeg',
		},
		{
			name: 'Lake Louise',
			lat: 51.441944,
			lon: -116.160556,
			province: 'AB',
			country: 'Canada',
			img: 'lakelouise.jpeg',
		},
		{
			name: 'Banff Sunshine',
			lat: 51.078611,
			lon: -115.782222,
			province: 'AB',
			country: 'Canada',
			img: 'sunshine.jpeg',
		},
		{
			name: 'Mr Seymour',
			lat: 49.389331776, 
			lon: -122.93999624,
			province: 'BC',
			country: 'Canada',
			img: 'mtseymour.jpeg',
		}
	
	]);
};