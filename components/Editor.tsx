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
	const { value, getLocalStorage, setLocalStorage } =
		useLocalStorage();
	const setDebouncedValue = useDebouncedValue({
		value: text,
		delay: 1000
	});

	useEffect(() => {
		setLocalStorage(value, 'text');
	}, [setDebouncedValue]);

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
					setLocalStorage(e.target.value, 'text');
				}}
				value={text}
			/>
		</>
	);
}

export default Editor;
