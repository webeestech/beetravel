import Contact from "./components/Contact"
import Countries from "./components/Countries"
import Customers from "./components/Customers"
import Destination from "./components/Destination"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
 

  return (
    <div className="App bg-primary-100">
      <Navbar />
      <Hero />
      <Countries />
      <Destination />
      <Customers />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
