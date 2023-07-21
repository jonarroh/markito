'use client';
import { useTextMD } from '../store/useTextMD';
import { useEffect } from 'react';
import mdToHTML from '../lib/md';

interface Props {
	textFromDB?: string;
}

export default function Md({ textFromDB }: Props) {
	const { text, setText } = useTextMD();
	//TODO : delete localStorage and use cookies temporary
	useEffect(() => {
		if (!textFromDB) return;
		localStorage.setItem('text', JSON.stringify(textFromDB));
		setText(textFromDB);
		return () => {
			localStorage.removeItem('text');
		};
	}, [textFromDB]);

	const textFromLocalStorage = localStorage.getItem('text') || '{}';

	return (
		<div className="bg-[#383838]  resize-none outline-none text-white">
			<section id="mk">
				<p
					dangerouslySetInnerHTML={{
						__html: mdToHTML(textFromLocalStorage ?? text)
					}}></p>
			</section>
		</div>
	);
}
