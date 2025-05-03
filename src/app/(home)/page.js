import About from "./about/About";
import Clients from "./clients/Clients";
import Donar from "./donar/Donar";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import Soon from "./soon";

export default function Home() {
  const production = true;
  return (
    <>
      {production ? (
        <Soon />
      ) : (
        <>
          {" "}
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
