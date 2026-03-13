import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title:
    'SEO for Roofers & Facebook Ads for Roofing Companies | Voxflow Media',
  description:
    'We help roofing companies book 23+ appointments per month using Facebook ads, AI qualification and human appointment setters. 30-day results guaranteed.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

