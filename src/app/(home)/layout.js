import Footer from "./footer/footer";
import Header from "./header/header";

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
