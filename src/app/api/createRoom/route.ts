import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		let { name, permission, text, userName } = await request.json();
		console.log(name, permission, text, userName);
		permission = permission === 'checked' ? 'edit' : 'see';

		const prisma = new PrismaClient();
		//create a UUID for file
		const uuid = uuidv4();

		//create a archive for file
		const archive = await prisma.archive.create({
			data: {
				id_archive: uuid,
				name: name,
				text: text
			}
		});
		//create a room for file
		const room = await prisma.room.create({
			data: {
				id_archive: uuid,
				permission: permission,
				nombre_usuario: userName
			}
		});

		prisma.$disconnect();

		return NextResponse.json({ redirect: uuid });
	} catch (e: any) {
		return NextResponse.json({ error: e.message });
	}
}
