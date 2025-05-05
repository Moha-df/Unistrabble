import Image from "next/image"
import Navbar from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Gallery() {
  const gameplayImages = [
    { src: "/images/gallery/gameplay1.png", alt: "Partie en cours" },
    { src: "/images/gallery/gameplay2.png", alt: "Score élevé" },
    { src: "/images/gallery/gameplay3.png", alt: "Multijoueur local" },
    { src: "/images/gallery/gameplay4.png", alt: "Parte avec des IA" },
    { src: "/images/gallery/gameplay5.png", alt: "Score élevé" },
    { src: "/images/gallery/gameplay6.png", alt: "Des thèmes pour tout les goûts" },
  ]

  const interfaceImages = [
    { src: "/images/gallery/interface1.png", alt: "Page de connexion" },
    { src: "/images/gallery/interface2.png", alt: "Menu principal" },
    { src: "/images/gallery/interface3.png", alt: "Paramètres des thèmes" },
    { src: "/images/gallery/interface4.png", alt: "Recherche de partie" },
    { src: "/images/gallery/interface5.png", alt: "Création de partie" },
    { src: "/images/gallery/interface6.png", alt: "Création de partie mutlijoueur" },
  ]

  return (
    <div className="min-h-screen bg-[#0F172A] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-600/20 via-slate-900 to-[#0F172A] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-10 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-10 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
          Galerie Unistrabble
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-slate-300">
          Découvrez le jeu à travers notre collection d'images
        </p>

        <Tabs defaultValue="gameplay" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto bg-slate-800/50 border border-slate-700/50">
            <TabsTrigger
              value="gameplay"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-fuchsia-600 data-[state=active]:text-white"
            >
              Gameplay
            </TabsTrigger>
            <TabsTrigger
              value="interface"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-fuchsia-600 data-[state=active]:text-white"
            >
              Interface
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gameplay" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gameplayImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-lg overflow-hidden group shadow-lg shadow-violet-700/10 border border-slate-700/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-fuchsia-500/10 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="interface" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interfaceImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-lg overflow-hidden group shadow-lg shadow-violet-700/10 border border-slate-700/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-fuchsia-500/10 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
            Vidéos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50 shadow-lg shadow-violet-700/10 hover:shadow-violet-700/20 transition-all duration-300 hover:translate-y-[-5px]">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/images/video-thumbnails/gameplay1-thumbnail.jpg"
              >
                <source src="/videos/gameplay1.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
            <div className="aspect-video bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50 shadow-lg shadow-violet-700/10 hover:shadow-violet-700/20 transition-all duration-300 hover:translate-y-[-5px]">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/images/video-thumbnails/gameplay2-thumbnail.jpg"
              >
                <source src="/videos/gameplay2.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900/80 backdrop-blur-md py-6 text-center text-slate-400 border-t border-slate-800">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Unistrabble - Projet étudiant de l'Université de Strasbourg</p>
        </div>
      </footer>
    </div>
  )
}
