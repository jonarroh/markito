'use client';
import { SignInButton, useClerk, useUser } from '@clerk/nextjs';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Button } from './button';

export default function Header() {
	const { user, isSignedIn } = useUser();
	const { signOut } = useClerk();

	return (
		<>
			<div className="flex justify-between items-center">
				<Avatar>
					<AvatarImage
						src={user?.profileImageUrl}
						alt={user?.firstName ?? 'image'}
					/>
					<AvatarFallback className="bg-gray-200 text-slate-950">
						MD
					</AvatarFallback>
				</Avatar>

				{isSignedIn ? (
					<Button
						variant={'outline'}
						onClick={() => {
							signOut();
						}}>
						Logout
					</Button>
				) : (
					<SignInButton mode="modal">
						<Button variant={'default'}>Login</Button>
					</SignInButton>
				)}
			</div>
		</>
	);
}
