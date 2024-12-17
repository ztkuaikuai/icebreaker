import IceBreakerCard from "@/components/IceBreakerCard";
import Link from "next/link";

export default function Home() {
	return (
		<div
			className="flex flex-col justify-center items-center h-screen bg-gradient-to-tl from-blue-100 via-blue-300 to-blue-500 animate-gradient bg-[length:200%_200%]" 

		>
			<header className="h-24 flex items-center">
				<h1 className="font-black text-4xl text-white/80 lg:text-6xl">破🧊</h1>
			</header>
			<main className="flex-1 flex items-center">
				<IceBreakerCard />
			</main>
			<footer className="h-24 flex items-end">
				<div className="mb-4">© 2024 - Made with ♥️ by <Link href="https://github.com/ztkuaikuai">筷筷</Link></div>
			</footer>
		</div>
	);
}
