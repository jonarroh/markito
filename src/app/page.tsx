'use client';

import Editor from '../../components/Editor';
import Md from '../../components/Md';
import ToggleEditor from '../../components/ToggleEditor';
import { Dialogs } from '../../components/ui/ShareButton';
import { useTextMD } from '../../store/useTextMD';

export default function Home() {
	const { isEditing } = useTextMD();
	return (
		<div>
			<div className="flex flex-col  justify-around">
				<div className="flex justify-end gap-4">
					<ToggleEditor />
					<Dialogs />
				</div>

				{isEditing ? <Editor /> : <Md />}
			</div>
		</div>
	);
}
