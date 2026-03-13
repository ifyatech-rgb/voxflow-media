import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contractor Marketing That Actually Books Jobs | Voxflow Media',
  description:
    'We help contractors book confirmed homeowner appointments using Facebook ads, AI follow-up and human appointment setters. 312+ appointments booked last 30 days. 30-day guarantee.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

