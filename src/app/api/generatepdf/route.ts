import pdf from 'html-pdf';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const { md } = await req.json();

		pdf
			.create(md)
			.toBuffer(function (
				err: any,
				buffer: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>
			) {
				const base64String = Buffer.from(buffer).toString('base64');
				console.log(base64String);
				return NextResponse.json({ base64String });
			});
	} catch (e: any) {
		console.log(e.message);
		return NextResponse.json({ error: e.message });
	}
}
