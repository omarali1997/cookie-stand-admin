import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}