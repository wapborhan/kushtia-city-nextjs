import Footer from "@/app/(home)/footer/Footer";
import Header from "@/app/(home)/header/Header";

export const metadata = {
  title: "Kushtia City",
  description: "Pages using the WithLayout",
};

export default function WithLayout({ children }) {
  const production = true;
  return (
    <>
      {production ? "" : <Header />}
      {children}
      {production ? "" : <Footer />}
    </>
  );
}
