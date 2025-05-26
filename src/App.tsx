import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import Particles from '../particles/Particles/Particles'
export default function App() {
  return (
      <div className="min-h-screen flex flex-col">
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none' // importante para permitir clicar nos inputs por cima
        }}>
          <Particles
            particleColors={['#007BFF', '#00BFFF']} // azul escuro e azul claro
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <Header />
        <main className="flex-grow pt-[60px]">
          <Home />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
  
  )
}