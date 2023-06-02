'use client';

import Markdown from 'marked-react';
import { useTextMD } from '../store/useTextMD';
import { useEffect } from 'react';

interface Props {
	textFromDB?: string;
}

export default function Md({ textFromDB }: Props) {
	const { text, setText } = useTextMD();
	useEffect(() => {
		if (!textFromDB) return;
		localStorage.setItem('text', JSON.stringify(textFromDB));
		setText(textFromDB);
	}, [textFromDB]);

	const textFromLocalStorage = localStorage.getItem('text') || '{}';

	return (
		<div className="bg-[#383838]  resize-none outline-none text-white">
			<section id="mk">
				<Markdown value={textFromLocalStorage}></Markdown>
			</section>
		</div>
	);
}
