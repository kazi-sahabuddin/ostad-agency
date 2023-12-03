import Subcriber from "@/components/Subcriber";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home",
  description: "next js website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        {children}
        <Subcriber />
        <Footer />
      </body>
    </html>
  );
}
