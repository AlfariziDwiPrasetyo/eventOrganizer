import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/utils/authContext";
const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Event Organizer Campus",
  description: "Event organizer for campus UMC ",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="cupcake" lang="en">
      <body className={figtree.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
