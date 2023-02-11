import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
