import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./Hero";
import Nav from "./Nav";


export default function Home() {
  return (
   <main>
       <Nav />
       <Hero />
   </main>
  );
}
