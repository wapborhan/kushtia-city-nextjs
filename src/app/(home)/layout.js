import Footer from "./footer/Footer";
import Header from "./header/Header";

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
