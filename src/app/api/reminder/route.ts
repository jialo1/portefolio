import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hi.tedesigner@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { clientEmail, clientName, appointmentDate, appointmentTime } = body;

    // Créer le lien de connexion (vous pouvez utiliser Zoom, Google Meet, etc.)
    const meetingLink = 'https://meet.google.com/xxx-yyyy-zzz'; // À remplacer par votre lien

    const mailOptions = {
      from: 'hi.tedesigner@gmail.com',
      to: clientEmail,
      subject: '⏰ Rappel : Votre appel découverte dans 30 minutes',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6B46C1;">⏰ Rappel : Votre appel découverte</h2>
          
          <p>Bonjour ${clientName},</p>
          
          <p>Votre appel découverte avec Ted Designer commence dans <strong>30 minutes</strong> !</p>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">📅 Détails du rendez-vous</h3>
            <p><strong>Date:</strong> ${appointmentDate}</p>
            <p><strong>Heure:</strong> ${appointmentTime}</p>
            <p><strong>Durée:</strong> 30 minutes</p>
          </div>

          <div style="background: #e8f5e8; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #2d5a2d; margin-top: 0;">🔗 Lien de connexion</h3>
            <p>Cliquez sur le bouton ci-dessous pour rejoindre l'appel :</p>
            <div style="text-align: center; margin: 20px 0;">
              <a href="${meetingLink}" target="_blank" style="background: #6B46C1; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
                🎥 Rejoindre l'appel
              </a>
            </div>
            <p style="font-size: 14px; color: #666;">Ou copiez ce lien : ${meetingLink}</p>
          </div>

          <div style="background: #fff3cd; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin-top: 0;">💡 Conseils pour un appel réussi</h3>
            <ul style="color: #856404;">
              <li>Testez votre micro et caméra avant l'appel</li>
              <li>Préparez vos questions et objectifs</li>
              <li>Assurez-vous d'être dans un endroit calme</li>
              <li>Rejoignez l'appel 5 minutes à l'avance</li>
            </ul>
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">📞 En cas de problème</h3>
            <p>Si vous rencontrez des difficultés techniques, contactez-moi :</p>
            <p><strong>Email:</strong> hi.tedesigner@gmail.com</p>
            <p><strong>Téléphone:</strong> [Votre numéro]</p>
          </div>

          <p>À tout de suite !</p>
          <p><strong>Ted Designer</strong></p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Rappel envoyé avec succès' 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi du rappel:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de l\'envoi du rappel' 
      },
      { status: 500 }
    );
  }
} 