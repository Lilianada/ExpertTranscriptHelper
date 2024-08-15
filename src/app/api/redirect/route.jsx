import { NextResponse } from 'next/server';

export async function GET(request) {
  const url = new URL(request.url);
  const planName = url.searchParams.get('planName');

  const whatsappNumber = '16616750759';
  const message = `Hi, I'm interested in purchasing the ${planName}.\n\nPlease provide further information.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return NextResponse.redirect(whatsappUrl);
}
