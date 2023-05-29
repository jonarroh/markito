//@ts-check
import { PrismaClient } from '@prisma/client';
import Md from '../../../components/Md';
import Copy from '../../../components/ui/copy';
const prisma = new PrismaClient();
export default async function Room({
	params
}: {
	params: { room: string };
}) {
	try {
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
		return (
			<div>
				<p>{roomArchivo.name}</p>
				<Md textFromDB={roomArchivo.text} />
			</div>
		);
	} catch (error) {
		return <div>error al conectar con la sala</div>;
	} finally {
		prisma.$disconnect();
	}
}
