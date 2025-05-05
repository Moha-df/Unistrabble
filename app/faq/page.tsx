import Navbar from "@/components/navbar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function FAQ() {
  const faqs = [
    {
      question: "Comment installer Unistrabble sur Windows ?",
      answer:
        "Téléchargez le fichier d'installation depuis notre page d'accueil, puis exécutez le fichier .exe.",
    },
    {
      question: "Le jeu est-il gratuit ?",
      answer: "Oui, Unistrabble est entièrement gratuit car il s'agit d'un projet étudiant à but non lucratif.",
    },
    {
      question: "Puis-je jouer en ligne avec mes amis ?",
      answer:
        "Absolument ! Unistrabble propose un mode multijoueur en ligne. Créez simplement une partie et vos amis pourront la rejoindre.",
    },
    {
      question: "Quelles sont les différences avec le Scrabble classique ?",
      answer:
        "Unistrabble conserve les règles fondamentales du Scrabble.",
    },
    {
      question: "Y a-t-il un classement des meilleurs joueurs ?",
      answer:
        "Nous ne proposons pas encore cette fonctionnalités malheureusement.",
    },
    {
      question: "Comment signaler un bug ou suggérer une amélioration ?",
      answer:
        "Vous pouvez nous contacter via le formulaire disponible dans la section 'Contact'.",
    },
    {
      question: "Le jeu est-il disponible en plusieurs langues ?",
      answer:
        "Actuellement, Unistrabble est disponible en français et en anglais. D'autres langues seront éventuellement ajoutées dans les futures mises à jour mais ce n'est pas notre priorités pour le moment.",
    },
    {
      question: "Quelles sont les configurations minimales requises ?",
      answer:
        "4 Go de RAM, 500 Mo d'espace disque disponible et une connexion internet pour le mode multijoueur.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0F172A] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-600/20 via-slate-900 to-[#0F172A] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-10 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-10 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
          Questions Fréquentes
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-slate-300">
          Tout ce que vous devez savoir sur Unistrabble
        </p>

        <div className="max-w-3xl mx-auto mb-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-700/50">
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-fuchsia-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl max-w-3xl mx-auto text-center border border-slate-700/50 shadow-lg shadow-violet-700/10">
          <h2 className="text-2xl font-bold mb-4">Vous avez d'autres questions ?</h2>
          <p className="mb-6 text-slate-300">N'hésitez pas à nous contacter directement</p>
          <Link href="/contact">
            <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-700/20">
              Contactez-nous
            </button>
          </Link>
        </div>
      </main>

      <footer className="bg-slate-900/80 backdrop-blur-md py-6 text-center text-slate-400 mt-20 border-t border-slate-800">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Unistrabble - Projet étudiant de l'Université de Strasbourg</p>
        </div>
      </footer>
    </div>
  )
}
