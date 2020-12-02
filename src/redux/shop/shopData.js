const SHOP_DATA = {
	hats: {
		id: 1,
		title: "Hats",
		routeName: "hats",
		items: [
			{
				id: 1,
				name: "Brown Brim",
				imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
				price: 25,
			},
			{
				id: 2,
				name: "Blue Beanie",
				imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
				price: 18,
			},
			{
				id: 3,
				name: "Brown Cowboy",
				imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
				price: 35,
			},
			{
				id: 4,
				name: "Grey Brim",
				imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
				price: 25,
			},
			{
				id: 5,
				name: "Green Beanie",
				imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
				price: 18,
			},
			{
				id: 6,
				name: "Palm Tree Cap",
				imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
				price: 14,
			},
			{
				id: 7,
				name: "Red Beanie",
				imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
				price: 18,
			},
			{
				id: 8,
				name: "Wolf Cap",
				imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
				price: 14,
			},
			{
				id: 9,
				name: "Blue Snapback",
				imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
				price: 16,
			},
			{
				id: 57,
				imageUrl:
					"https://images.pexels.com/photos/1070058/pexels-photo-1070058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Fancy Brim",
				price: 25,
			},
			{
				id: 58,
				imageUrl:
					"https://images.pexels.com/photos/1215445/pexels-photo-1215445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "NY Cap",
				price: 129,
			},
			{
				id: 59,
				imageUrl:
					"https://images.pexels.com/photos/2182515/pexels-photo-2182515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Sheer Brim",
				price: "30",
			},
			{
				id: 60,
				imageUrl:
					"https://images.pexels.com/photos/3817723/pexels-photo-3817723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Black Brim",
				price: 45,
			},
			{
				id: 61,
				imageUrl:
					"https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Brown Brim",
				price: 20,
			},
			{
				id: 62,
				imageUrl:
					"https://images.pexels.com/photos/2884310/pexels-photo-2884310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Big Cowboy",
				price: 45,
			},
			{
				id: 63,
				imageUrl:
					"https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Flower Brim",
				price: 55,
			},
		],
	},
	sneakers: {
		id: 2,
		title: "Sneakers",
		routeName: "sneakers",
		items: [
			{
				id: 10,
				name: "Adidas NMD",
				imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
				price: 220,
			},
			{
				id: 11,
				name: "Adidas Yeezy",
				imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
				price: 280,
			},
			{
				id: 12,
				name: "Black Converse",
				imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
				price: 110,
			},
			{
				id: 13,
				name: "Nike White AirForce",
				imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
				price: 160,
			},
			{
				id: 14,
				name: "Nike Red High Tops",
				imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
				price: 160,
			},
			{
				id: 15,
				name: "Nike Brown High Tops",
				imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
				price: 160,
			},
			{
				id: 16,
				name: "Air Jordan Limited",
				imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
				price: 190,
			},
			{
				id: 17,
				name: "Timberlands",
				imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
				price: 200,
			},
			{
				id: 64,
				imageUrl:
					"https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Nike White AirForce",
				price: 175,
			},
			{
				id: 65,
				imageUrl:
					"https://images.pexels.com/photos/2946956/pexels-photo-2946956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Converse White",
				price: 110,
			},
			{
				id: 66,
				imageUrl:
					"https://images.pexels.com/photos/977912/pexels-photo-977912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Platform Shoes",
				price: 80,
			},
			{
				id: 67,
				imageUrl:
					"https://images.pexels.com/photos/5639/legs-snickers-converse.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Converse Blue",
				price: 199,
			},
			{
				id: 68,
				imageUrl:
					"https://images.pexels.com/photos/2157455/pexels-photo-2157455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Nike Air Zoom",
				price: 229,
			},
			{
				id: 69,
				imageUrl:
					"https://images.pexels.com/photos/3636684/pexels-photo-3636684.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Vans Yellow",
				price: 80,
			},
			{
				id: 70,
				imageUrl:
					"https://images.pexels.com/photos/1693115/pexels-photo-1693115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "New Balance Grey",
				price: 150,
			},
		],
	},
	jackets: {
		id: 3,
		title: "Jackets",
		routeName: "jackets",
		items: [
			{
				id: 18,
				name: "Black Jean Shearling",
				imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
				price: 125,
			},
			{
				id: 19,
				name: "Blue Jean Jacket",
				imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
				price: 90,
			},
			{
				id: 20,
				name: "Grey Jean Jacket",
				imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
				price: 90,
			},
			{
				id: 21,
				name: "Brown Shearling",
				imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
				price: 165,
			},
			{
				id: 22,
				name: "Tan Trench",
				imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
				price: 185,
			},
			{
				id: 44,
				imageUrl:
					"https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Yellow Hoodie",
				price: 65,
			},
			{
				id: 45,
				imageUrl:
					"https://images.pexels.com/photos/3215584/pexels-photo-3215584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Tiger Jacket",
				price: 85,
			},
			{
				id: 46,
				imageUrl:
					"https://images.pexels.com/photos/3608981/pexels-photo-3608981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Black Jacket",
				price: 75,
			},
			{
				id: 47,
				imageUrl:
					"https://images.pexels.com/photos/3206114/pexels-photo-3206114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Yellow Coat",
				price: 125,
			},
			{
				id: 48,
				imageUrl:
					"https://images.pexels.com/photos/3724358/pexels-photo-3724358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Red Jacket",
				price: 145,
			},
			{
				id: 49,
				imageUrl:
					"https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Khaki Jacket",
				price: 65,
			},
			{
				id: 50,
				imageUrl:
					"https://images.pexels.com/photos/1384218/pexels-photo-1384218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Denim Jacket",
				price: 50,
			},
		],
	},
	womens: {
		id: 4,
		title: "Womens",
		routeName: "womens",
		items: [
			{
				id: 23,
				name: "Blue Tanktop",
				imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
				price: 25,
			},
			{
				id: 24,
				name: "Floral Blouse",
				imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
				price: 20,
			},
			{
				id: 25,
				name: "Floral Dress",
				imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
				price: 80,
			},
			{
				id: 26,
				name: "Red Dots Dress",
				imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
				price: 80,
			},
			{
				id: 27,
				name: "Striped Sweater",
				imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
				price: 45,
			},
			{
				id: 28,
				name: "Yellow Track Suit",
				imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
				price: 135,
			},
			{
				id: 29,
				name: "White Blouse",
				imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
				price: 20,
			},
			{
				id: 36,
				imageUrl:
					"https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Pink Dress",
				price: 100,
			},
			{
				id: 37,
				imageUrl:
					"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Summer Dress Set",
				price: 60,
			},
			{
				id: 38,
				imageUrl:
					"https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Flower Shirt",
				price: 70,
			},
			{
				id: 39,
				imageUrl:
					"https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Gray Shirt",
				price: 50,
			},
			{
				id: 40,
				imageUrl:
					"https://images.pexels.com/photos/449977/pexels-photo-449977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Black Riders",
				price: 140,
			},
			{
				id: 41,
				imageUrl:
					"https://images.pexels.com/photos/2005356/pexels-photo-2005356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Red Suit Set",
				price: 90,
			},
			{
				id: 42,
				imageUrl:
					"https://images.pexels.com/photos/3676424/pexels-photo-3676424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Stripe Shirt",
				price: 45,
			},
			{
				id: 43,
				imageUrl:
					"https://images.pexels.com/photos/833185/pexels-photo-833185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Dot Dress",
				price: 190,
			},
		],
	},
	mens: {
		id: 5,
		title: "Mens",
		routeName: "mens",
		items: [
			{
				id: 30,
				name: "Camo Down Vest",
				imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
				price: 325,
			},
			{
				id: 31,
				name: "Floral T-shirt",
				imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
				price: 20,
			},
			{
				id: 32,
				name: "Black & White Longsleeve",
				imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
				price: 25,
			},
			{
				id: 33,
				name: "Pink T-shirt",
				imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
				price: 25,
			},
			{
				id: 34,
				name: "Jean Long Sleeve",
				imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
				price: 40,
			},
			{
				id: 35,
				name: "Burgundy T-shirt",
				imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
				price: 25,
			},
			{
				id: 51,
				imageUrl:
					"https://images.pexels.com/photos/3133688/pexels-photo-3133688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
				name: "White T-shirt",
				price: 35,
			},
			{
				id: 52,
				imageUrl:
					"https://images.pexels.com/photos/1850172/pexels-photo-1850172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Stripe Shirt",
				price: 50,
			},
			{
				id: 53,
				imageUrl:
					"https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Yellow Sweat Set",
				price: 75,
			},
			{
				id: 54,
				imageUrl:
					"https://images.pexels.com/photos/3989362/pexels-photo-3989362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Blue Shirt",
				price: 35,
			},
			{
				id: 55,
				imageUrl:
					"https://images.pexels.com/photos/3299174/pexels-photo-3299174.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Red Shirt",
				price: 20,
			},
			{
				id: 56,
				imageUrl:
					"https://images.pexels.com/photos/3026283/pexels-photo-3026283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				name: "Black T-shirt",
				price: 25,
			},
		],
	},
};

export default SHOP_DATA;
