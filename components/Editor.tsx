'use client';
import { useRef } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useTextMD } from '../store/useTextMD';

function Editor() {
	const { setText, text } = useTextMD();
	const { value, getLocalStorage, setLocalStorage } =
		useLocalStorage();

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
