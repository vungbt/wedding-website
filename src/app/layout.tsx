/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { MainLayout } from '@/libraries/layouts';

export const metadata: Metadata = {
  title: 'BTW - Quỳnh Như & Bình Minh',
  description: 'Chuc mung hanh phuc Nhu nhe!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Qwitcher+Grypen:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
