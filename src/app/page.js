import About from "./home/about/About";
import Clients from "./home/clients/Clients";
import Donar from "./home/donar/Donar";
import Header from "./home/header/Header";
import Hero from "./home/hero/Hero";
import Services from "./home/services/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Donar />
    </>
  );
}
