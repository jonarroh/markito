import { useState } from 'react';

type Items = 'text' | 'isEditing';

export default function useLocalStorage() {
	const [value, setvalue] = useState('');

	const setLocalStorage = (value: string, item: Items) => {
		localStorage.setItem(item, value);
		setvalue(value);
	};

	const getLocalStorage = (item: Items) => {
		const text = localStorage.getItem(item);
		setvalue(text || '');
	};

	return { value, setLocalStorage, getLocalStorage };
}
