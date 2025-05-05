import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/contact';

export async function POST(request: Request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création du message:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const contacts = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des messages' },
      { status: 500 }
    );
  }
} 