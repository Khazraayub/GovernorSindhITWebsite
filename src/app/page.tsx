import Image from "next/image";
import Header from "./components/Header";
import Herosec1 from "./components/Herosec1";
import Herosec2 from "./components/Herosec2";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Herosec1/>
      <Herosec2/>
      <Footer/>
    </div>
    
  );
}
