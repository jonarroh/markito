import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	try {
		const prisma = new PrismaClient();
		const rooms = await prisma.room.findMany();
		console.log(rooms);
		return NextResponse.json(rooms);
	} catch (e: any) {
		return NextResponse.json({ error: e.message });
	}
}
