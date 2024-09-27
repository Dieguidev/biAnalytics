import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, subject, phone, message } = await req.json();
  console.log('Datos recibidos:', { name, email, subject, phone, message });

  // Configura el transportador de Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Servidor SMTP
    port: parseInt(process.env.SMTP_PORT ?? '587', 10), // Puerto SMTP
    secure: process.env.SMTP_SECURE === 'true', // true para 465, false para otros puertos
    auth: {
      user: process.env.SMTP_USER, // Tu correo electrónico
      pass: process.env.SMTP_PASS, // Tu contraseña de correo electrónico
    },
  });

  // Configura el correo electrónico
  const mailOptions = {
    from: email,
    to: process.env.SMTP_USER, // Tu correo electrónico
    subject: `Nuevo mensaje de contacto: ${subject}`,
    text: `
      Nombre: ${name}
      Correo Electrónico: ${email}
      Teléfono: ${phone}
      Mensaje: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado con éxito');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    let errorMessage = 'Error desconocido';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
