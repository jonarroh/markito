'use client';
import { useTextMD } from '../store/useTextMD';
import CloseEye from './SVG/CloseEye';
import Eye from './SVG/Eye';

function ToggleEditor() {
	const { isEditing, setIsEditing } = useTextMD();
	const handleClick = () => setIsEditing(!isEditing);

	return (
		<button onClick={handleClick}>
			{isEditing ? <Eye /> : <CloseEye />}
		</button>
	);
}

export default ToggleEditor;
