import Footer from "./components/Footer";
import Header from "./components/Header";
import Teoria from "./components/Teoria";

function App() {
    //aqui va a ir la logica del compnente

  return (
    <>
    {/*aqui va la zona del html*/}
    <Header />
    <main className="container">
      <Teoria />
    </main>
    <Footer />  
    </>
  )
}

export default App
