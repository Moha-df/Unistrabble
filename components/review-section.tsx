"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { StarIcon } from "lucide-react"
import { toast } from "sonner"

interface Review {
  _id: string;
  name: string;
  email: string;
  message: string;
  rating: number;
  createdAt: string;
}

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la récupération des avis');
      }
      
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de la récupération des avis');
    } finally {
      setIsLoading(false);
    }
  };

  // Calculer la note moyenne
  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length 
    : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de l\'envoi de l\'avis');
      }

      toast.success('Avis publié avec succès !');
      setNewReview({ name: "", email: "", message: "", rating: 5 });
      setShowForm(false);
      await fetchReviews();
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de l\'envoi de l\'avis');
    }
  };

  return (
    <div className="space-y-8">
      {/* Note moyenne */}
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-full border border-slate-700/50 shadow-lg shadow-violet-700/10">
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                className={`h-8 w-8 ${star <= Math.round(averageRating) ? "text-amber-400" : "text-slate-600"}`}
                fill={star <= Math.round(averageRating) ? "currentColor" : "none"}
              />
            ))}
          </div>
        </div>
        <p className="text-2xl font-bold mt-4">{averageRating.toFixed(1)}/5</p>
        <p className="text-slate-400">{reviews.length} avis</p>
      </div>

      {/* Bouton pour ajouter un avis */}
      {!showForm ? (
        <div className="text-center mb-8">
          <Button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white border-0 shadow-lg shadow-violet-700/20 transition-all duration-300 hover:scale-105"
          >
            Ajouter un avis
          </Button>
        </div>
      ) : (
        <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 mb-8 shadow-lg shadow-violet-700/10">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Votre nom"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  required
                  className="bg-slate-700/50 border-slate-600/50 focus:border-violet-500 focus:ring-violet-500 text-white placeholder:text-slate-400"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Votre email"
                  value={newReview.email}
                  onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                  required
                  className="bg-slate-700/50 border-slate-600/50 focus:border-violet-500 focus:ring-violet-500 text-white placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-white">Votre note</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <StarIcon
                        className={`h-6 w-6 ${star <= newReview.rating ? "text-amber-400" : "text-slate-600"}`}
                        fill={star <= newReview.rating ? "currentColor" : "none"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Textarea
                  placeholder="Votre commentaire"
                  value={newReview.message}
                  onChange={(e) => setNewReview({ ...newReview, message: e.target.value })}
                  required
                  className="bg-slate-700/50 border-slate-600/50 focus:border-violet-500 focus:ring-violet-500 min-h-[100px] text-white placeholder:text-slate-400"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="border-slate-600 bg-slate-800 text-white hover:bg-slate-700"
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white border-0"
                >
                  Publier
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Liste des avis */}
      {isLoading ? (
        <div className="text-center text-slate-300">Chargement des avis...</div>
      ) : reviews.length === 0 ? (
        <div className="text-center text-slate-300">Aucun avis pour le moment</div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <Card
              key={review._id}
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg shadow-violet-700/5 hover:shadow-violet-700/10 transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-white">{review.name}</h3>
                    <p className="text-slate-400 text-sm">
                      {new Date(review.createdAt).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className={`h-5 w-5 ${star <= review.rating ? "text-amber-400" : "text-slate-600"}`}
                        fill={star <= review.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-slate-300">{review.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
