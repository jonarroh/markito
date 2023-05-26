'use client';

import Markdown from 'marked-react';
import { useTextMD } from '../store/useTextMD';

interface Props {
	textFromDB?: string;
}

export default function Md({ textFromDB }: Props) {
	const { text } = useTextMD();
	return (
		<div className="bg-[#383838]  resize-none outline-none text-white">
			<section id="mk">
				<Markdown value={textFromDB ? textFromDB : text}></Markdown>
			</section>
		</div>
	);
}
