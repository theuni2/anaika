import Image from "next/image";
import Nav from './component/nav'
// import PdfFlipbook from "./component/flipbook";
import Flipbook from "./component/flipbook";
import Slider from "./component/silder";
import Hero from "./component/hero";
import Bout from "./component/about";
import Workshop from "./component/workshop";
// import Footer from "./component/footer";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="">

  <Nav/>
  <Slider/>
  <Hero/>
  <Bout/>
  <Workshop />
<Footer/>
{/* <Flipbook/> */}

  {/* <Footer/> */}
   
    </div>
  );
}
