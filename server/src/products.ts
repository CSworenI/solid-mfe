export interface Product {
	id: number,
	name: string,
	price: number, 
	description: string, 
	image: string, 
	longDescription: string;
}

const products: Product[] = [
	{
		id: 1,
		name: 'Black Widow',
		price: 1.99,
		description: 'A high resolution image of "Black Widow"',
		image: 'http://localhost:8080/black_widow.png',
		longDescription: 'This high quality (1728x3072) image in 19:6 format celebrates Marvel\'s Avengers character "Black Widow" as portrayed by actress Scarlett Johansson.'
	},
	{
		id: 2,
		name: 'Captain Marvel',
		price: 1.99,
		description: 'A high resolution image of "Captain Marvel"',
		image: 'http://localhost:8080/captain_marvel.png',
		longDescription: 'This high quality (1728x3072) image in 19:6 format celebrates Marvel\'s Avengers character "Captain Marvel" as portrayed by actress Brie Larson.'
	},
	{
		id: 3,
		name: 'Carnage',
		price: 1.99,
		description: 'A high resolution image of "Carnage"',
		image: 'http://localhost:8080/carnage.png',
		longDescription: 'This high quality (1728x3072) image in 19:6 format celebrates Marvel\'s Spiderman villain "Carnage" as voiced by actor Woody Harrelson.'
	},
	{
		id: 4,
		name: 'Deadpool (G)',
		price: 2.49,
		description: 'A high resolution GOLD edition image of "Deadpool"',
		image: 'http://localhost:8080/deadpool.png',
		longDescription: 'This GOLD edition high quality (1728x3072) image in 19:6 format celebrates Marvel\'s Avengers character "Deadpool" as portrayed by actor Ryan Reynolds. It\'s gold standard is reinforced with golden highlights and is usually a secret collector\'s card, but offered today for a nominal fee.'
	},
	{
		id: 5,
		name: 'Dr Strange (G)',
		price: 2.49,
		description: 'A high resolution GOLD edition image of "Dr Strange"',
		image: 'http://localhost:8080/dr_strange.png',
		longDescription: 'This GOLD edition high quality (1728x3072) image in 19:6 format celebrates Marvel\'s Avengers character "Dr Strange" as portrayed by actor Benedict Cumberbatch. It\'s gold standard is reinforced with golden highlights and is usually a secret collector\'s card, but offered today for a nominal fee.'
	},
	{
		id: 6,
		name: 'Ghost Spider',
		price: 1.99,
		description: 'A high resolution image of "Ghost Spider"',
		image: 'http://localhost:8080/ghost_spider.png',
		longDescription: 'This high quality (1728x3072) image in 19:6 format celebrates Marvel\'s Spiderverse character "Ghost Spider" also called "Spider Gwen" as voiced by actress Hailee Steinfeld.'
	},
	{
		id: 7,
		name: 'Hawkeye (G)',
		price: 2.49,
		description: 'A high resolution GOLD edition image of "Hawkeye"',
		image: 'http://localhost:8080/hawkeye.png',
		longDescription: 'This GOLD edition high quality (1728x3072) image in 19:6 format celebrates Marvel\'s Avengers character "Hawkeye" as portrayed by actor Jeremy Renner. It\'s gold standard is reinforced with golden highlights and is usually a secret collector\'s card, but offered today for a nominal fee.'
	},
	{
		id: 8,
		name: 'Rocket (G)',
		price: 2.99,
		description: 'A high resolution GOLD edition image of "Rocket"',
		image: 'http://localhost:8080/rocket.png',
		longDescription: 'This GOLD edition high quality (1728x3072) image in 19:6 format celebrates Marvel\'s Guardians of the Galaxy character "Rocket" as voiced by actor Bradley Cooper. It\'s gold standard is reinforced with golden highlights including a "ROCKET" launcher and is usually a secret collector\'s card, but offered today for a nominal fee.'
	},
	{
		id: 9,
		name: 'Scarlett Witch (P)',
		price: 3.99,
		description: 'A high resolution PLATINUM edition image of "Scarlett Witch"',
		image: 'http://localhost:8080/scarlett_witch.png',
		longDescription: 'This PLATINUM edition high quality (1728x3072) image in 19:6 format celebrates Marvel\'s Avengers, Wandavision series, and Dr Strange\'s Multiverse of Madness character "Scarlett Witch" also called "Wanda Maximoff" as portrayed by actress Elizabeth Olsen. It\'s platinum standard is reinforced with slivery-blue (platinum) highlights, an extraordinary crown (due a platinum chaos sorceress), and features her summoning a ball of energy. Cards of this quality are usually ultra-rare collector\'s cards, but this one is offered today for a nominal fee.'
	},
	{
		id: 10,
		name: 'Starlord (G)',
		price: 2.99,
		description: 'A high resolution GOLD edition image of "Starlord"',
		image: 'http://localhost:8080/starlord.png',
		longDescription: 'This GOLD edition high quality (1728x3072) image in 19:6 format celebrates Marvel\'s Guardians of the Galaxy character "Starlord" as voiced by actor Chris Pratt. It\'s gold standard is reinforced with golden highlights including a gilded, futuristic MP3 player and is usually a secret collector\'s card, but offered today for a nominal fee.'
	},
	{
		id: 11,
		name: 'Venom (G)',
		price: 2.99,
		description: 'A high resolution GOLD edition image of "Venom"',
		image: 'http://localhost:8080/venom.png',
		longDescription: 'This GOLD edition high quality (1728x3072) image in 19:6 format celebrates Marvel\'s Spiderman and Venom series lawful evil character "Venom" as portrayed by actor Tom Hardy. It\'s gold standard is reinforced with golden highlights including spikey body armor trimming and is usually a secret collector\'s card, but offered today for a nominal fee.'
	},
	{
		id: 12,
		name: 'Wolverine (G)',
		price: 2.99,
		description: 'A high resolution GOLD edition image of "Wolverine"',
		image: 'http://localhost:8080/wolverine.png',
		longDescription: 'This GOLD edition high quality (1728x3072) image in 19:6 format celebrates Marvel\'s X-Men and Wolverine series angsty hero "Wolverine" as portrayed by actor Hugh Jackman. It\'s gold standard is reinforced with golden highlights including gilded body armor trim and illusionary mask and is usually a secret collector\'s card, but offered today for a nominal fee.'
	},
];

export default products;