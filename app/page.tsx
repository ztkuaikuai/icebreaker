export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center h-screen  bg-gradient-to-tl from-blue-100 via-blue-300 to-blue-500">
			<header className="h-24 flex items-center">
				<h1 className="font-black text-4xl">破🧊</h1>
			</header>
			<main className="flex-1 flex items-center">
				<div className="card shadow-2xl m-4">
					<div className="card-body text-white text-xl">
						<p>你一直想尝试的事情是什么？</p>
					</div>
				</div>
			</main>
			<footer className="h-24 flex items-end">
				<div className="mb-4">© 2024 - Made with ♥️ by 筷筷</div>
			</footer>
		</div>
	);
}
