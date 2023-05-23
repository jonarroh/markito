import { useState } from 'react';

export default function useLocalStorage() {
	const [value, setvalue] = useState('');

	const setLocalStorage = (value: string) => {
		localStorage.setItem('text', value);
		setvalue(value);
	};

	const getLocalStorage = () => {
		const text = localStorage.getItem('text');
		setvalue(text || '');
	};

	return { value, setLocalStorage, getLocalStorage };
}
