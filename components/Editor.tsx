'use client';
import useLocalStorage from '../hooks/useLocalStorage';
import { useTextMD } from '../store/useTextMD';

function Editor() {
	const { setText, text } = useTextMD();
	const { value, getLocalStorage, setLocalStorage } =
		useLocalStorage();

	return (
		<>
			<textarea
				className="bg-[#383838] w-screen h-screen resize-none outline-none text-black"
				onChange={e => {
					setText(e.target.value);
					setLocalStorage(e.target.value);
				}}
				value={text}
			/>
		</>
	);
}

export default Editor;
