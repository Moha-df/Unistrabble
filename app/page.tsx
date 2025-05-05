import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Globe } from "lucide-react"
import ReviewSection from "@/components/review-section"
import GameFeatures from "@/components/game-features"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-600/20 via-slate-900 to-[#0F172A] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 mt-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
            UNISTRABBLE
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-slate-300">
            Le jeu de Scrabble réinventé par les étudiants de l'Unistra. Testez votre vocabulaire et votre stratégie
            dans cette version unique du jeu classique !
          </p>

          {/* Download Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mb-12">
            <Link href="/downloads/unistrabble-windows.zip" download>
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-violet-800 hover:opacity-90 text-white border-0 shadow-lg shadow-violet-700/20 w-full"
              >
                <Download className="mr-2 h-5 w-5" />
                Windows
              </Button>
            </Link>
            <Link href="/downloads/unistrabble-linux.zip" download>
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-violet-800 hover:opacity-90 text-white border-0 shadow-lg shadow-violet-700/20 w-full"
              >
                <Download className="mr-2 h-5 w-5" />
                Linux
              </Button>
            </Link>
            <Link href="/downloads/unistrabble-mac.zip" download>
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-violet-800 hover:opacity-90 text-white border-0 shadow-lg shadow-violet-700/20 w-full"
              >
                <Download className="mr-2 h-5 w-5" />
                Mac
              </Button>
            </Link>
          </div>

          <p className="text-sm text-slate-400 mb-8 italic">
            Attention : actuellement le jeu est disponible uniquement en mode hors ligne mais sera très prochainement disponible en ligne également.
          </p>

          {/* Web Version Button */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-fuchsia-500 to-pink-600 hover:opacity-90 text-white px-8 py-6 text-xl border-0 shadow-lg shadow-fuchsia-700/20 transition-all duration-300 hover:scale-105"
          >
            <Globe className="mr-2 h-6 w-6" />
            Jouer en ligne
          </Button>
        </div>

        {/* Game Features */}
        <GameFeatures />

        {/* Reviews Section */}
        <section className="mt-20 mb-10">
          <h2 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
            Avis des joueurs
          </h2>
          <ReviewSection />
        </section>
      </main>

      <footer className="bg-slate-900/80 backdrop-blur-md py-6 text-center text-slate-400 border-t border-slate-800">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Unistrabble - Projet étudiant de l'Université de Strasbourg</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="/credits" className="hover:text-fuchsia-400 transition-colors">
              Crédits
            </Link>
            <Link href="/gallery" className="hover:text-fuchsia-400 transition-colors">
              Galerie
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
