'use client';
import useLocalStorage from '../hooks/useLocalStorage';
import { useTextMD } from '../store/useTextMD';
import CloseEye from './SVG/CloseEye';
import Eye from './SVG/Eye';
import { Button } from './ui/button';

function ToggleEditor() {
	const { isEditing, setIsEditing } = useTextMD();
	const { setLocalStorage } = useLocalStorage();
	const handleClick = () => {
		setIsEditing(!isEditing);
		setLocalStorage(JSON.stringify(!isEditing), 'isEditing');
	};

	return (
		<Button onClick={handleClick}>
			{isEditing ? <Eye /> : <CloseEye />}
		</Button>
	);
}

export default ToggleEditor;
