import { Providers } from "@/redux/provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "FFXIV Quest",
	description: "FFXIV Quest",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-ffxiv text-white font-body min-h-screen`}>
				<div className="flex justify-center">
					<div className="bg-primary p-5 rounded-lg w-1/2 mt-10">
						<Link href="/">Home</Link>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="p-3 w-1/2 mt-10">
						<Providers>{children}</Providers>
					</div>
				</div>
			</body>
		</html>
	);
}
