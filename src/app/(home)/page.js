import About from "./about/About";
import Clients from "./clients/Clients";
import Donar from "./donar/Donar";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Services from "./services/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <About />
      {/* <Services /> */}
      <Donar />
    </>
  );
}
