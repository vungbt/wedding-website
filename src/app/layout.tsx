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
      </head>
      <body suppressHydrationWarning>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
