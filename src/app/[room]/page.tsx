//@ts-check
import { PrismaClient } from '@prisma/client';
import Md from '../../../components/Md';

export default async function Room({
	params
}: {
	params: { room: string };
}) {
	const prisma = new PrismaClient();

	//en base a la url, buscar la sala en la base de datos

	const room = await prisma.room.findFirst({
		where: {
			id_archive: params.room
		}
	});

	//buscar el arvhivo de la sala en la base de datos
	const archivo = await prisma.archive.findFirst({
		where: {
			id_archive: params.room
		}
	});

	//unir room y archivo en un solo objeto

	const roomArchivo = {
		...room,
		...archivo
	};

	prisma.$disconnect();

	return (
		<div>
			<p>{roomArchivo.name}</p>
			<Md textFromDB={roomArchivo.text} />
		</div>
	);
}
