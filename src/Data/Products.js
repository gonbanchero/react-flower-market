export const formatPrice = (price) => {
	return new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: 'ARS',
	}).format(price);
};

// export const capitalize = (product) => {
// 	const letter = product.split('');

// 	for (var i = 0; i < letter.length; i++) {
// 		letter[i] = letter[i].charAt(0).toUpperCase() + letter[i].slice(1);
// 	}

// 	return letter.join(' ');
// };

let productList = [
	{
		name: 'Ramo Jazmines',
		category: 'Flores',
		price: '2000',
		quantity: 1,
		img: '/img/ramo3.png',
		key: 1,
	},

	{
		name: 'Ramo Bosque',
		category: 'Secos',
		price: '2400',
		quantity: 1,
		img: '/img/ramo1.png',
		key: 2,
	},

	{
		name: 'Ramo Casamiento',
		category: 'Eventos',
		price: '2900',
		quantity: 1,
		img: '/img/ramo.png',
		key: 3,
	},

	{
		name: 'Ramo Fresco',
		category: 'Estacion',
		price: '2000',
		quantity: 1,
		img: '/img/ramo2.png',
		key: 4,
	},

	{
		name: 'Ramo Premium',
		category: 'Flores',
		price: '2000',
		quantity: 1,
		img: '/img/ramo4.png',
		key: 5,
	},

	{
		name: 'Ramo Verano',
		category: 'Estacion',
		price: '2000',
		quantity: 1,
		img: '/img/ramo5.png',
		key: 6,
	},
	{
		name: 'Ramo Verano',
		category: 'Estacion',
		price: '2000',
		quantity: 1,
		img: '/img/ramo5.png',
		key: 6,
	},
	{
		name: 'Ramo Verano',
		category: 'Estacion',
		price: '2000',
		quantity: 1,
		img: '/img/ramo5.png',
		key: 6,
	},
];
export default productList;

const categories = productList
	.map((item) => item.category)
	.reduce(function (a, b) {
		if (a.indexOf(b) < 0) a.push(b);
		return a;
	}, []);

export const arraySections = [categories];

const ShallowCopy = [...productList];

export const Productos = ShallowCopy.reduce((res, item) => {
	if (!res[item.category]) {
		res[item.category] = [];
	}
	res[item.category] = [...res[item.category], item];

	return res;
}, {});
