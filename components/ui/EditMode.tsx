'use client';
import { useTextMD } from '../../store/useTextMD';
import Editor from '../Editor';
import Md from '../Md';
interface Props {
	textFromDB?: string;
}

function EditMode({ textFromDB }: Props) {
	const { isEditing } = useTextMD();
	if (textFromDB) {
		console.log(textFromDB);
		window.localStorage.setItem('textMD', textFromDB);
	}

	return (
		<>
			{isEditing ? (
				<Editor textFromDB={textFromDB} />
			) : (
				<Md textFromDB={textFromDB} />
			)}
		</>
	);
}

export default EditMode;
