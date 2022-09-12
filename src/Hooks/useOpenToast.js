import { useState } from 'react';

export const useOpenToast = () => {
	const [openToast, setOpenToast] = useState('none');
	return { openToast, setOpenToast };
};
