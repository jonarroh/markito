'use client';

import Markdown from 'marked-react';
import { useTextMD } from '../store/useTextMD';

export default function Md() {
	const { text } = useTextMD();
	return <Markdown>{text}</Markdown>;
}
