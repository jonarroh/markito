'use client';

import { useRef } from 'react';
import { Button } from './button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from './dialog';
import { Input } from './input';
import { Label } from './label';
import { Switch } from './switch';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export function Dialogs() {
	const nameRef = useRef<HTMLInputElement>(null);
	const permissionRef = useRef<HTMLButtonElement>(null);
	const { user } = useUser();
	const userName = user?.username ?? 'Anonymous';
	const router = useRouter();

	const handleClick = async () => {
		const permission = permissionRef.current?.dataset.state;
		const name = nameRef.current?.value;
		const text = window.localStorage.getItem('text');

		console.log({ name, permission, text });

		const data = await fetch('/api/createRoom', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, permission, text, userName })
		});
		const resp = await data.json();

		router.push(`/${resp.redirect}`);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">+</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit mode</DialogTitle>
					<DialogDescription>
						Edit your preferences to share the Md
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input
							id="name"
							ref={nameRef}
							defaultValue="Name"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Switch id="airplane-mode" ref={permissionRef} />
						<Label htmlFor="airplane-mode">Edit</Label>
					</div>
				</div>
				<DialogFooter>
					<Button type="button" onClick={handleClick}>
						Save changes
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
