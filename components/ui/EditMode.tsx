'use client';

import { useTextMD } from '../../store/useTextMD';
import Editor from '../Editor';
import Md from '../Md';

function EditMode() {
	const { isEditing } = useTextMD();
	return <>{isEditing ? <Editor /> : <Md />}</>;
}

export default EditMode;
