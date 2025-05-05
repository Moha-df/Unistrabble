'use client';

import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de l\'envoi du message');
      }

      const data = await response.json();
      console.log('Message envoyé:', data);
      
      toast.success('Message envoyé avec succès !');
      setFormData({ name: '', email: '', message: '' });
      setIsSuccess(true);
    } catch (error) {
      console.error('Erreur complète:', error);
      toast.error('Erreur lors de l\'envoi du message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (isSuccess) {
      setIsSuccess(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-600/20 via-slate-900 to-[#0F172A] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-10 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-10 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
          Contactez-nous
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-slate-300">
          Une question, une suggestion ou un problème ? N'hésitez pas à nous contacter !
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 shadow-lg shadow-violet-700/10">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
              Envoyez-nous un message
            </h2>
            {isSuccess ? (
              <div className="text-center py-8">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Message envoyé !</h3>
                <p className="text-slate-300 mb-6">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white border-0 shadow-lg shadow-violet-700/20 transition-all duration-300 hover:scale-105"
                >
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="bg-slate-700/50 border-slate-600/50 focus:border-violet-500 focus:ring-violet-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="bg-slate-700/50 border-slate-600/50 focus:border-violet-500 focus:ring-violet-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    className="bg-slate-700/50 border-slate-600/50 focus:border-violet-500 focus:ring-violet-500 min-h-[150px]"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white border-0 shadow-lg shadow-violet-700/20 transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            )}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 shadow-lg shadow-violet-700/10">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
              Informations de contact
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-violet-500 to-fuchsia-600 p-2 rounded-lg shadow-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Adresse</h3>
                  <p className="text-slate-300 mt-1">
                    Université de Strasbourg
                    <br /> 7 Rue René Descartes
                    <br />
                    67000 Strasbourg, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-violet-500 to-fuchsia-600 p-2 rounded-lg shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-slate-300 mt-1">unistrabble@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-violet-500 to-fuchsia-600 p-2 rounded-lg shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Téléphone</h3>
                  <p className="text-slate-300 mt-1">+33 7 67 45 18 15</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <h3 className="font-medium mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/unistrabble/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700/50 p-3 rounded-full hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagram-gradient)"/>
                      <defs>
                        <linearGradient id="instagram-gradient" x1="1.574" y1="22.373" x2="22.737" y2="1.21" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFDD55"/>
                          <stop offset="0.5" stopColor="#FF543E"/>
                          <stop offset="1" stopColor="#C837AB"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/tbcRVNYx4R"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700/50 p-3 rounded-full hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
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
