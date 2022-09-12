import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import { useOpenCard } from './Hooks/useOpenCard';
import { useOpenToast } from './Hooks/useOpenToast';
import { Cart } from './Components/Cart/Cart';
import { Checkout } from './Pages/Checkout';
import { Thanks } from './Pages/Thanks';
import { Footer } from './Components/UI/Footer';

function App() {
	const openedCard = useOpenCard();
	const openedToast = useOpenToast();

	return (
		<Router>
			<GlobalStyle />
			<Cart />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							openedCard={openedCard}
							openedToast={openedToast}
						/>
					}
				/>
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/thank" element={<Thanks />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
