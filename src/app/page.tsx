'use client';

import Editor from '../../components/Editor';
import Md from '../../components/Md';
import ToggleEditor from '../../components/ToggleEditor';
import { useTextMD } from '../../store/useTextMD';

export default function Home() {
	const { isEditing } = useTextMD();
	return (
		<main>
			<div className="flex flex-col  justify-around">
				<ToggleEditor />
				{isEditing ? <Md /> : <Editor />}
			</div>
		</main>
	);
}
