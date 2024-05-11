import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./(Shared)/Navbar";
import Footer from "./(Shared)/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Ai Log",
  description: "Blog built in nextJs which uses Ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
