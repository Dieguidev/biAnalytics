"use client";
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppIconProps {
  phoneNumber: string; // Número de teléfono con el código de país
  message?: string;    // Mensaje opcional que se enviará por defecto
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ phoneNumber, message = '' }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}${message ? `?text=${encodedMessage}` : ''}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        padding: '15px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        transition: 'transform 0.3s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};
