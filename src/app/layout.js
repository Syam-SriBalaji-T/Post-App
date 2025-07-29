// app/layout.js
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css' // optional global styles

export const metadata = {
  title: 'Post App',
  description: 'A simple post app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header title="Post App" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
