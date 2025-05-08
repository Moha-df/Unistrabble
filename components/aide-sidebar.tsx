"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"

export default function AideSidebar() {
  const [activeSection, setActiveSection] = useState("introduction")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "introduction",
        "installation",
        "regles",
        "interface",
        "comment-jouer",
        "modes-de-jeu",
        "fonctionnalites",
      ]

      // Trouver la section actuellement visible
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "installation", title: "Installation et démarrage" },
    { id: "regles", title: "Règles du jeu" },
    { id: "interface", title: "Interface de jeu" },
    { id: "comment-jouer", title: "Comment jouer ?" },
    { id: "modes-de-jeu", title: "Modes de jeu" },
    { id: "fonctionnalites", title: "Fonctionnalités spéciales" },
  ]

  return (
    <div className="w-full lg:w-64 lg:sticky lg:top-24 h-fit">
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-lg shadow-violet-700/10 p-4">
        <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
          Table des matières
        </h3>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-3 py-2 rounded-lg flex items-center transition-colors ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 text-white"
                  : "text-slate-300 hover:bg-slate-700/50"
              }`}
            >
              <ChevronRight
                className={`h-4 w-4 mr-2 transition-transform ${
                  activeSection === section.id ? "text-fuchsia-400" : "text-slate-400"
                }`}
              />
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
