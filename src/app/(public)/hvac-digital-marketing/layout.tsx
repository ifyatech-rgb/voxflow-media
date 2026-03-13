import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'HVAC Digital Marketing That Books Replacement Jobs | Voxflow Media',
  description:
    'We help HVAC companies book 18 to 35 replacement appointments per month using Facebook ads, AI qualification and human appointment setters. 30-day results guaranteed.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

