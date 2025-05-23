import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[60px]">
        <Home />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}