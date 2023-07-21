'use client';
import { useTextMD } from '../store/useTextMD';
import { useEffect, useState } from 'react';
import mdToHTML from '../lib/md';

interface Props {
	textFromDB?: string;
}

export default function Md({ textFromDB }: Props) {
	const [textToRender, setTextToRender] = useState('');
	useEffect(() => {
		setTextToRender(localStorage.getItem('text') ?? '');
	}, []);

	useEffect(() => {
		if (!textFromDB) return;
		setTextToRender(textFromDB);
		window.localStorage.setItem('text', textFromDB);
	}, [textFromDB]);

	return (
		<div className="bg-[#383838]  resize-none outline-none text-white">
			<section id="mk">
				<p
					dangerouslySetInnerHTML={{
						__html: mdToHTML(textToRender)
					}}></p>
			</section>
		</div>
	);
}
