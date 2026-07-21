import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProductViewer from "./components/ProductViewer"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Showcase from "./components/Showcase"
import Performance from "./components/Performance"
import Highlights from "./components/Highlights"
import Features from "./components/Features"
import Footer from "./components/Footer"

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return ( 
        <>
            <Navbar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Highlights />
            <Features />
            <Footer />
        </>
   )
}

export default App