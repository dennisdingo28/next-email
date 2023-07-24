import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import {cookies} from "next/headers";
import Container from '@/components/ui/container';
import AuthProvider from '@/components/AuthProvider';
import ToasterProivder from '@/providers/toast-provider';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NextEmail',
  description: 'NextEmail - Email sending tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = cookies().get("theme");
  
  return (
    <html lang="en" className={theme?.value ==="dark" ? "dark":""}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
      </head>
      <body className='min-h-[100vh] bg-slate-200 dark:bg-[#181818]'>
        <AuthProvider>
          <Container>
            <Navbar/>
            {children}
            <Footer/>
          </Container>
          <ToasterProivder/>
        </AuthProvider>
      </body>
    </html>
  )
}
