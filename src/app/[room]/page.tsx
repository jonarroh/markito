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
			id_room: params.room
		}
	});

	//buscar el arvhivo de la sala en la base de datos
	const archivo = await prisma.archivo.findFirst({
		where: {
			id_archivo: params.room
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
			<p>{roomArchivo.nombre_archivo}</p>
			<Md textFromDB={roomArchivo.text} />
		</div>
	);
}
