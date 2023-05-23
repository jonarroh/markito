'use client';

import Markdown from 'marked-react';
import { useTextMD } from '../store/useTextMD';

export default function Md() {
	const { text } = useTextMD();
	return (
		<div className="bg-[#383838]  resize-none outline-none text-white">
			<Markdown>{text}</Markdown>
		</div>
	);
}
