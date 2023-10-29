import '../globals.css'
import { Inter } from 'next/font/google'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'account',
  description: 'it is the account page of password manager',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={inter.className}>{children}
      <ToastContainer />
      </body>
    </html>
  )
}
