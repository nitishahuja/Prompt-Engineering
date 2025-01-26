import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chain of Thought (CoT) Exploration",
  description: "A formal website exploring Chain of Thought in AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex justify-center space-x-6">
              <li>
                <Link
                  href="/#exploration"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Exploration
                </Link>
              </li>
              <li>
                <Link
                  href="/#examples"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  href="/#presentation-formats"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Presentation Formats
                </Link>
              </li>
              <li>
                <Link
                  href="/#quizzes-and-exercises"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Quizzes and Exercises
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
