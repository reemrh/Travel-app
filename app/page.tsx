// import Image from "next/image";

import Camp from "./Components/Camp";
import Features from "./Components/Features";
import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
import GetApp from "./Components/GetApp";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
