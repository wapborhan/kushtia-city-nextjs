import About from "./about/About";
import Clients from "./clients/Clients";
import Donar from "./donar/Donar";
import Hero from "./hero/Hero";
import Services from "./services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <Services />
      <Donar />
    </>
  );
}
