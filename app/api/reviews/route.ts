import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Review from '@/models/Review';

// Récupérer tous les avis
export async function GET() {
  try {
    console.log('Tentative de connexion à MongoDB...');
    await connectDB();
    console.log('Connexion à MongoDB réussie');
    
    console.log('Récupération des avis...');
    const reviews = await Review.find({}).sort({ createdAt: -1 });
    console.log('Avis récupérés:', reviews);
    
    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Erreur lors de la récupération des avis:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des avis' },
      { status: 500 }
    );
  }
}

// Créer un nouvel avis
export async function POST(request: Request) {
  try {
    console.log('Tentative de création d\'un nouvel avis...');
    const body = await request.json();
    console.log('Données reçues:', body);
    
    console.log('Tentative de connexion à MongoDB...');
    await connectDB();
    console.log('Connexion à MongoDB réussie');
    
    console.log('Création de l\'avis...');
    const review = await Review.create(body);
    console.log('Avis créé:', review);
    
    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de l\'avis:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'avis' },
      { status: 500 }
    );
  }
} 