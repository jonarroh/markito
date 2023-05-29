'use client';

import { usePathname } from 'next/navigation';

export default function Copy() {
	const pathname = usePathname();
	return (
		<div>
			<p>{pathname}</p>
		</div>
	);
}
