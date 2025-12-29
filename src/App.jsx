import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Section2 from "./components/Section2"
import About from "./components/About"
import OurAdvantages from "./components/OurAdvantage"

const App = () => {
  return (
    <div className="h-[100%] w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Section2 />
      <About />
      <OurAdvantages />
    </div>
  )
}

export default App
