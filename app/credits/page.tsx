import Image from "next/image"
import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Credits() {
  const teamMembers = [
    { name: "Ayoub 👑(mvp)", role: "Développeur Réseau/BDD/System", image: "/images/team/member1.png" },
    { name: "Mohamed", role: "Développeur Full Stack", image: "/images/team/member2.png" },
    { name: "Felix", role: "Développeur Full Stack", image: "/images/team/member3.png" },
    { name: "Dariia", role: "Chef de projet", image: "/images/team/member4.png" },
    { name: "Carole", role: "Designer UI/UX", image: "/images/team/member5.png" },
    { name: "Ugo", role: "Développeur", image: "/images/team/member6.png" },
    { name: "Salim", role: "Sound designer", image: "/images/team/member7.png" },
    { name: "Malo", role: "Responsable des merges", image: "/images/team/member8.png" },
    { name: "Amine", role: "Développeur bouillant", image: "/images/team/member9.png" },
    { name: "Charbel", role: "Esclave Réseau", image: "/images/team/member10.png" },
  ]

  return (
    <div className="min-h-screen bg-[#0F172A] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-600/20 via-slate-900 to-[#0F172A] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-10 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-10 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
          L'Équipe Unistrabble
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-slate-300">
          Découvrez les 10 étudiants de l'Université de Strasbourg qui ont donné vie à ce projet innovant.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 overflow-hidden shadow-lg shadow-violet-700/5 hover:shadow-violet-700/20 transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-fuchsia-500/10 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-white">{member.name}</h3>
                <p className="text-slate-400">{member.role}</p>
                {member.name === "Mohamed" && (
                  <div className="flex mt-3">
                    <a
                      href="https://github.com/moha-df"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-violet-400 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
            Remerciements
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl max-w-3xl mx-auto border border-slate-700/50 shadow-lg shadow-violet-700/10">
            <p className="text-lg mb-4 text-slate-300">
              Nous tenons à remercier l'Université de Strasbourg pour son soutien tout au long de ce projet.
            </p>
            <p className="text-lg mb-4 text-slate-300">
              Un grand merci à nos professeurs qui nous ont guidés et conseillés pendant le développement d'Unistrabble.
            </p>
            <p className="text-lg text-slate-300">
              Nous remercions également tous les testeurs qui ont contribué à améliorer l'expérience de jeu.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
            Technologies Utilisées
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {["Godot 4", "Python", "PostgreSql", "Bash", "Git", "Next.js", "React", "MongoDB"].map(
              (tech, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg text-center border border-slate-700/50 shadow-lg shadow-violet-700/5 hover:shadow-violet-700/20 transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <p className="font-medium text-slate-300">{tech}</p>
                </div>
              ),
            )}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900/80 backdrop-blur-md py-6 text-center text-slate-400 mt-20 border-t border-slate-800">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Unistrabble - Projet étudiant de l'Université de Strasbourg</p>
        </div>
      </footer>
    </div>
  )
}
