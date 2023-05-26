'use client';

import Editor from '../../components/Editor';
import Md from '../../components/Md';
import Download from '../../components/SVG/Download';
import ToggleEditor from '../../components/ToggleEditor';
import { Dialogs } from '../../components/ui/ShareButton';
import { Button } from '../../components/ui/button';
import { useTextMD } from '../../store/useTextMD';

export default function Home() {
	const handleClick = async () => {
		const md = document.getElementById('mk')?.innerHTML;
		const res = await fetch('/api/generatepdf', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ md })
		});

		const data = await res.json();
		console.log(data);

		// //create a link and click it after download
		// const linkSource = `data:application/pdf;base64,${base64String}`;
		// const downloadLink = document.createElement('a');
		// const fileName = 'markdown.pdf';
		// downloadLink.href = linkSource;
		// downloadLink.download = fileName;
		// downloadLink.click();
	};

	const { isEditing } = useTextMD();
	return (
		<div>
			<div className="flex flex-col  justify-around">
				<div className="flex justify-end gap-4">
					<ToggleEditor />
					<Button variant={'secondary'} onClick={handleClick}>
						<Download />
					</Button>
					<Dialogs />
				</div>

				{isEditing ? <Editor /> : <Md />}
			</div>
		</div>
	);
}
