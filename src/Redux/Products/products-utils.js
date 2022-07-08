import { Productos } from '../../Data/Products';
import productList from '../../Data/Products';

export const filterProduct = (products, categoria) => {
	const productosFiltrados = Productos;
	const originalList = productList;

	if (categoria === 'Todos') {
		return originalList;
	}
	if (categoria === 'Secos') {
		return productosFiltrados.Secos;
	}
	if (categoria === 'Flores') {
		return productosFiltrados.Flores;
	}
	if (categoria === 'Eventos') {
		return productosFiltrados.Eventos;
	}
	if (categoria === 'Estacion') {
		return productosFiltrados.Estacion;
	}

	return originalList;
};
