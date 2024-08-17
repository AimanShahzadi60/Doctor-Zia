import Navbar from "@/components/pageLayout/navbar"
import "../styles/globals.css"
import { Inter } from 'next/font/google'
import Footer from "@/components/pageLayout/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zia Foundation: Empowering Communities Through Islamic Education and Social Welfare',
  description: "Explore Zia Foundation's commitment to advancing Islamic education, supporting families, and promoting community welfare. Discover our initiatives and programs dedicated to fostering faith, knowledge, and compassion.",
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
