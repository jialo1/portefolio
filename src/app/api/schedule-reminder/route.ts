import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { clientEmail, clientName, appointmentDate, appointmentTime } = body;

    // Calculer le moment d'envoi du rappel (30 minutes avant)
    const appointmentDateTime = new Date(`${appointmentDate}T${appointmentTime}:00`);
    const reminderTime = new Date(appointmentDateTime.getTime() - 30 * 60 * 1000); // 30 minutes avant
    
    // Si le rappel doit être envoyé dans le futur
    if (reminderTime > new Date()) {
      const delay = reminderTime.getTime() - new Date().getTime();
      
      // Programmer l'envoi du rappel
      setTimeout(async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/reminder`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              clientEmail,
              clientName,
              appointmentDate,
              appointmentTime
            }),
          });
          
          if (!response.ok) {
            console.error('Erreur lors de l\'envoi du rappel automatique');
          }
        } catch (error) {
          console.error('Erreur lors de l\'envoi du rappel automatique:', error);
        }
      }, delay);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Rappel programmé avec succès',
      reminderTime: reminderTime.toISOString()
    });

  } catch (error) {
    console.error('Erreur lors de la programmation du rappel:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la programmation du rappel' 
      },
      { status: 500 }
    );
  }
} 