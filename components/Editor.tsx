'use client';
import { useEffect, useRef } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useTextMD } from '../store/useTextMD';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
	textFromDB?: string;
}

function Editor({ textFromDB }: Props) {
	const { setText, text } = useTextMD();
	const setDebouncedValue = useDebouncedValue({
		value: text,
		delay: 1000
	});

	useEffect(() => {
		const textFromLocalStorage = localStorage.getItem('text');
		if (!textFromLocalStorage) {
			alert('No text found in local storage');
			return;
		}
		setText(textFromLocalStorage);
	}, []);

	// useEffect(() => {
	// 	localStorage.setItem('text', text);
	// }, [setDebouncedValue]);

	useEffect(() => {
		if (!textFromDB) return;

		setText(textFromDB);
	}, [textFromDB]);

	return (
		<>
			<textarea
				className="bg-[#383838] w-full h-screen resize-none outline-none text-white"
				onChange={e => {
					setText(e.target.value);
					localStorage.setItem('text', e.target.value);
				}}
				value={text}
			/>
		</>
	);
}

export default Editor;
