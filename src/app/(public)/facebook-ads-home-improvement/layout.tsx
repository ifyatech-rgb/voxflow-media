import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Facebook Ads for Home Improvement Companies | Voxflow Media',
  description:
    'We run Facebook and Instagram ads that fill your calendar with qualified homeowners. Done-for-you campaigns for roofers, HVAC, remodelers and painters. Book a free call.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

