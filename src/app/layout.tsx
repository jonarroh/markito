import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Marky',
	description: 'A markdown editor'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="bg-[#383838]">
			<body className={inter.className}>
				<main className="grid grid-cols-12 min-h-screen w-screen text-white">
					<section className="bg-[#383838] p-12 col-span-12 sm:col-span-12 md:col-span-9">
						{children}
					</section>
					<section className="bg-[#1E1E1E] p-12 hidden sm:hidden sm:col-span-3 md:block md:col-span-3">
						<p>login</p>
					</section>
				</main>
			</body>
		</html>
	);
}
