import About from "./home/about/About";
import Clients from "./home/clients/Clients";
import Donar from "./home/donar/Donar";
import Header from "./home/header/Header";
import Hero from "./home/hero/Hero";
import Services from "./home/services/Services";
import Soon from "./home/soon";

export default function Home() {
  const production = process.env.IS_DEVELOPMENT;

  return (
    <>
      {production === "true" ? (
        <Soon />
      ) : (
        <>
          <Header />
          <Hero />
          <Clients />
          <About />
          <Services />
          <Donar />
        </>
      )}
    </>
  );
}
