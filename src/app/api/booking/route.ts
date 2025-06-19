import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hi.tedesigner@gmail.com',
    pass: process.env.EMAIL_PASSWORD // Mot de passe d'application Gmail
  }
});

// Fonction pour créer un événement calendrier
function createCalendarEvent(formData: any) {
  const startDate = new Date(`${formData.preferredDate}T${formData.preferredTime}:00`);
  const endDate = new Date(startDate.getTime() + 30 * 60000); // +30 minutes

  const event = {
    summary: 'Appel découverte - Ted Designer',
    description: `Appel découverte avec ${formData.firstName} ${formData.lastName}\n\nProjet: ${formData.projectType}\nDescription: ${formData.message}`,
    start: {
      dateTime: startDate.toISOString(),
      timeZone: 'Europe/Paris'
    },
    end: {
      dateTime: endDate.toISOString(),
      timeZone: 'Europe/Paris'
    },
    attendees: [
      { email: 'hi.tedesigner@gmail.com' },
      { email: formData.email }
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 30 },
        { method: 'popup', minutes: 10 }
      ]
    }
  };

  return event;
}

// Fonction pour envoyer email à Ted
async function sendEmailToTed(formData: any, files: any[]) {
  const fileAttachments = files.map(file => ({
    filename: file.name,
    content: file.content,
    contentType: file.type
  }));

  const mailOptions = {
    from: 'hi.tedesigner@gmail.com',
    to: 'hi.tedesigner@gmail.com',
    subject: `🎯 Nouvelle réservation d'appel découverte - ${formData.firstName} ${formData.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6B46C1;">🎯 Nouvelle réservation d'appel découverte</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Informations du client</h3>
          <p><strong>Nom:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Téléphone:</strong> ${formData.phone || 'Non renseigné'}</p>
          <p><strong>Entreprise:</strong> ${formData.company || 'Non renseigné'}</p>
        </div>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Détails du projet</h3>
          <p><strong>Type de projet:</strong> ${formData.projectType}</p>
          <p><strong>Description:</strong></p>
          <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #6B46C1;">${formData.message}</p>
        </div>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Rendez-vous</h3>
          <p><strong>Date:</strong> ${formData.preferredDate}</p>
          <p><strong>Heure:</strong> ${formData.preferredTime}</p>
        </div>

        ${formData.website || formData.instagram || formData.linkedin || formData.facebook ? `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Réseaux sociaux et site web</h3>
          ${formData.website ? `<p><strong>Site web:</strong> <a href="${formData.website}" target="_blank">${formData.website}</a></p>` : ''}
          ${formData.instagram ? `<p><strong>Instagram:</strong> ${formData.instagram}</p>` : ''}
          ${formData.linkedin ? `<p><strong>LinkedIn:</strong> <a href="${formData.linkedin}" target="_blank">${formData.linkedin}</a></p>` : ''}
          ${formData.facebook ? `<p><strong>Facebook:</strong> <a href="${formData.facebook}" target="_blank">${formData.facebook}</a></p>` : ''}
        </div>
        ` : ''}

        ${files.length > 0 ? `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Documents joints (${files.length})</h3>
          <ul>
            ${files.map(file => `<li>${file.name}</li>`).join('')}
          </ul>
        </div>
        ` : ''}

        <div style="text-align: center; margin-top: 30px;">
          <a href="mailto:${formData.email}" style="background: #6B46C1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">
            Répondre au client
          </a>
        </div>
      </div>
    `,
    attachments: fileAttachments
  };

  return transporter.sendMail(mailOptions);
}

// Fonction pour envoyer email de confirmation au client
async function sendConfirmationToClient(formData: any) {
  const calendarEvent = createCalendarEvent(formData);
  
  // Créer le lien Google Calendar
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calendarEvent.summary)}&dates=${calendarEvent.start.dateTime.replace(/[-:]/g, '').replace(/\.\d{3}/, '')}/${calendarEvent.end.dateTime.replace(/[-:]/g, '').replace(/\.\d{3}/, '')}&details=${encodeURIComponent(calendarEvent.description)}&location=Video%20Call`;

  const mailOptions = {
    from: 'hi.tedesigner@gmail.com',
    to: formData.email,
    subject: '✅ Confirmation de votre appel découverte avec Ted Designer',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6B46C1;">✅ Votre appel découverte est confirmé !</h2>
        
        <p>Bonjour ${formData.firstName},</p>
        
        <p>Merci pour votre réservation ! Votre appel découverte de 30 minutes est confirmé.</p>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">📅 Détails du rendez-vous</h3>
          <p><strong>Date:</strong> ${formData.preferredDate}</p>
          <p><strong>Heure:</strong> ${formData.preferredTime}</p>
          <p><strong>Durée:</strong> 30 minutes</p>
          <p><strong>Format:</strong> Appel vidéo (lien envoyé 10 min avant)</p>
        </div>

        <div style="background: #e8f5e8; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #2d5a2d; margin-top: 0;">📋 Ce que nous allons aborder</h3>
          <ul style="color: #2d5a2d;">
            <li>Analyse de vos besoins et objectifs</li>
            <li>Présentation de mes services adaptés</li>
            <li>Estimation de budget et planning</li>
            <li>Questions/réponses</li>
          </ul>
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <a href="${calendarUrl}" target="_blank" style="background: #6B46C1; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
            📅 Ajouter à mon calendrier
          </a>
        </div>

        <div style="background: #fff3cd; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #ffc107;">
          <h3 style="color: #856404; margin-top: 0;">⏰ Rappel automatique</h3>
          <p style="color: #856404; margin-bottom: 0;">Vous recevrez un rappel par email 30 minutes avant l'appel avec le lien de connexion.</p>
        </div>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">📞 Contact</h3>
          <p>Si vous avez des questions ou souhaitez modifier le rendez-vous, n'hésitez pas à me contacter :</p>
          <p><strong>Email:</strong> hi.tedesigner@gmail.com</p>
        </div>

        <p>À très bientôt !</p>
        <p><strong>Ted Designer</strong></p>
      </div>
    `
  };

  return transporter.sendMail(mailOptions);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formData, files } = body;

    // Envoyer email à Ted
    await sendEmailToTed(formData, files);

    // Envoyer confirmation au client
    await sendConfirmationToClient(formData);

    // Programmer le rappel automatique
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/schedule-reminder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientEmail: formData.email,
          clientName: `${formData.firstName} ${formData.lastName}`,
          appointmentDate: formData.preferredDate,
          appointmentTime: formData.preferredTime
        }),
      });
    } catch (reminderError) {
      console.error('Erreur lors de la programmation du rappel:', reminderError);
      // On continue même si le rappel échoue
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Réservation envoyée avec succès !' 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi des emails:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de l\'envoi. Veuillez réessayer.' 
      },
      { status: 500 }
    );
  }
} 