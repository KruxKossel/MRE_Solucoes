import { lazy, Suspense } from "react"
import Header from "./components/Header"
import WhatsAppButton from "./components/WhatsAppButton"
import Particles from './components/particles/Particles/Particles'

// Lazy loading dos componentes principais
const Home = lazy(() => import("./components/Home"))
const Footer = lazy(() => import("./components/Footer"))

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 40,
        pointerEvents: 'none'
      }}>
        <Particles
          particleColors={['#007BFF', '#00BFFF']} 
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
      <main className="flex-grow pt-[60px] relative z-10">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Carregando...</div>}>
          <Home />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20 bg-gray-100"></div>}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  )
}