import { useState } from 'react'
import AuroraBackground from './components/AuroraBackground'
import FloatingHearts from './components/FloatingHearts'
import PasswordGate from './components/PasswordGate'
import HeroSection from './components/HeroSection'
import CounterSection from './components/CounterSection'
import MeaningSection from './components/MeaningSection'
import MissingYouSection from './components/MissingYouSection'
import GallerySection from './components/GallerySection'
import LoveCardsSection from './components/LoveCardsSection'
import PromiseSection from './components/PromiseSection'
import CakeWishSection from './components/CakeWishSection'
import VideoMessageSection from './components/VideoMessageSection'
import MessageSection from './components/MessageSection'
import MusicPlayer from './components/MusicPlayer'
import Footer from './components/Footer'

export default function App() {
  const [unlocked, setUnlocked] = useState(false)

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />
  }

  return (
    <>
      <AuroraBackground />
      <FloatingHearts count={20} />

      <main>
        <HeroSection />
        <CounterSection />
        <MeaningSection />
        <MissingYouSection />
        <GallerySection />
        <LoveCardsSection />
        <PromiseSection />
        <CakeWishSection />
        <VideoMessageSection />
        <MessageSection />
        <Footer />
      </main>

      <MusicPlayer />
    </>
  )
}
