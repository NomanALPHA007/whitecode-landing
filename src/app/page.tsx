import Solution from "@/sections/home/Solutions"; // Adjust path if necessary
import {
  Chat,
  Discover,
  Hero,
  Locations,
  Mission,
  Project,
  Services,
  Values,
  Vision,
} from "@/sections";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Mission />
      <Project />
      <Solution />
      <Services />
      <Locations />
      <Discover />
      <Vision />
      <Values />
      <Chat />
    </main>
  );
}
