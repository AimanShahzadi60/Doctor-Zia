import Navbar from "@/components/pageLayout/navbar"
import "../styles/globals.css"
import { Inter } from 'next/font/google'
import Footer from "@/components/pageLayout/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zia Foundation',
  description: 'Give an Iconic touch to your Living Area',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
     <div> {children }</div>  
        <Footer/>
        </body>
    </html>
  )
}
