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
			img: 'grouse.jpeg',
			description: ' Located just north of Vancouver, Grouse offers breathtaking views of the city below. Known for its accessible ski slopes and year-round activities, it\'s a perfect spot for both beginners and seasoned enthusiasts.'
		},
		{ 
			name: 'Big White', 
			lat: 49.721944, 
			lon: -118.928889,
			province: 'BC',
			country: 'Canada',
			img: 'bigwhite.jpeg',
			description: 'Known for its reliable snowfall and expansive terrain, Big White near Kelowna provides an exceptional skiing experience. The resort is also famous for its \'snow ghosts\' - trees heavily laden with snow creating whimsical shapes.'
		},
		{ name: 'Sun Peaks', 
			lat: 50.893889, 
			lon: -119.893056,
			province: 'BC',
			country: 'Canada',
			img: 'sunpeaks.jpeg',
			description: 'The second largest ski area in Canada, Sun Peaks offers a blend of skiing and snowboarding options across three mountains. Its European-style village is perfect for family getaways.'
		},
		{
			name: 'Cypress Mountain',
			lat: 49.325498698,
			lon: -122.803663452,
			province: 'BC',
			country: 'Canada',
			img: 'cypress.jpeg',
			description: 'Located in West Vancouver, Cypress was a venue for the 2010 Vancouver Winter Olympics. It boasts a variety of runs and spectacular views of the surrounding water and city.'
		},
		{
			name: 'Whistler Blackcomb',
			lat: 50.075499698,
			lon: -122.86916319,
			province: 'BC',
			country: 'Canada',
			img: 'whistler.jpeg',
			description: 'One of the largest and most famous ski resorts globally, Whistler Blackcomb offers over 8,000 acres of ski-able terrain and a vibrant village life, making it a world-class destination for skiers and snowboarders alike.'
		},
		{
			name: 'Lake Louise',
			lat: 51.441944,
			lon: -116.160556,
			province: 'AB',
			country: 'Canada',
			img: 'lakelouise.jpeg',
			description: 'Situated in the heart of the Canadian Rockies near Banff, Lake Louise is renowned for its stunning scenic beauty and versatile terrain, accommodating everyone from beginners to expert skiers.'
		},
		{
			name: 'Banff Sunshine',
			lat: 51.078611,
			lon: -115.782222,
			province: 'AB',
			country: 'Canada',
			img: 'sunshine.jpeg',
			description: 'Located in Banff National Park, Banff Sunshine offers a unique skiing experience with its high alpine terrain and stunning views. The resort is known for its dry, light snow and long ski season.'
		},
		{
			name: 'Mt Seymour',
			lat: 49.389331776, 
			lon: -122.93999624,
			province: 'BC',
			country: 'Canada',
			img: 'mtseymour.jpeg',
			description: 'A local favourite, Mt Seymour is known for its family-friendly atmosphere and varied terrain. Located just outside Vancouver, it offers a range of activities for all skill levels.'
		}
	
	]);
};