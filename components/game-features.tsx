import { CheckCircle2 } from "lucide-react"

export default function GameFeatures() {
  const features = [
    {
      title: "Modes de jeu variés",
      description: "Jouez en solo, contre l'IA ou en multijoueur avec vos amis.",
    },
    {
      title: "Dictionnaire complet",
      description: "Plus de 400 000 mots français reconnus et leurs définitions.",
    },
    {
      title: "Mise à jour régulière",
      description: "Nous nous engageons à amélioré le jeu dans les jours à venir.",
    },
    {
      title: "Historique des parties",
      description: "Suivez vos anciennes parties et votre progression pour suivre l'évolution de votre niveau.",
    },
    {
      title: "Personnalisation",
      description: "Personnalisez l'apparence du jeu et du plateau selon vos préférences.",
    },
    {
      title: "Compte sécuriser",
      description: "Des techniques avancés afin que vos données reste en sécurités",
    },
  ]

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
        Caractéristiques du jeu
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg shadow-violet-700/5 hover:shadow-violet-700/10 transition-all duration-300 hover:translate-y-[-5px]"
          >
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-violet-500 to-fuchsia-600 p-2 rounded-lg shadow-lg">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
