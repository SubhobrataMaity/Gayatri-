import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gayatri Chatterjee - UI/UX Designer',
  description: 'A passionate UI/UX designer creating human-centered digital experiences.',
  keywords: ['UI/UX Designer', 'Product Designer', 'Web Design', 'Mobile Design', 'Portfolio'],
  authors: [{ name: 'Gayatri Chatterjee' }],
  openGraph: {
    title: 'Gayatri Chatterjee - UI/UX Designer',
    description: 'A passionate UI/UX designer creating human-centered digital experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen-safe flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16 md:pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
