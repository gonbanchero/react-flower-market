import { useState } from 'react';

export const useOpenCard = () => {
	const [openCard, setOpenCard] = useState(null);

	return { openCard, setOpenCard };
};
