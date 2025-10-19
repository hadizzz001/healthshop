"use client"
import { Footer, Navbar2 } from '../components'
import './globals.css'
import './custom.css'
import './bootstrap.min.css'
import './bs-select.css'
import './slick.css'
import { useSearchParams } from 'next/navigation'
import { CartProvider } from './context/CartContext';
import { BooleanProvider } from './context/CartBoolContext';
import GifLoader from '../components/GifLoader'
import Offer from '../components/Offer'
import WhatsAppIcon from '../components/WhatsAppIcon';
import { GoogleAnalytics } from '@next/third-parties/google'
import PointsWatcher from "../components/PointsWatcher";







export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {



  return (
    <html className="no-js no-touch supports-no-cookies" lang="en">
      <>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="en" httpEquiv="Content-Language" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1"
          name="viewport"
        />
        <meta content="max-image-preview:large" name="robots" />
        <title>
          Health Shop Lebanon
        </title>
        <meta
          content="At Health Shop Lebanon, we're reshaping the way businesses connect."
          name="description"
        />
        <meta content="Health Shop Lebanon" name="keywords" property="Health Shop Lebanon  , Health Shop Lebanon, men, women, medical, health, gym, origin" />
        <meta
          content="Health Shop Lebanon"
          name=""
          property="og:title"
        />
        <meta
          content="https://Health Shop Lebanon  .com/"
          name=""
          property="og:url"
        />
        <meta content="website" name="" property="og:type" />
        <meta
          content="At Health Shop Lebanon, we're reshaping the way businesses connect."
          name=""
          property="og:description"
        />
        <meta
          content="https://res.cloudinary.com/dpb42mz2q/image/upload/v1760635198/logo1_b0wg2t.jpg"
          name=""
          property="og:image"
        />

        <link
          href="https://res.cloudinary.com/dpb42mz2q/image/upload/v1760635198/logo1_b0wg2t.jpg"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="https://res.cloudinary.com/dpb42mz2q/image/upload/v1760635198/logo1_b0wg2t.jpg"
          rel="icon"
          sizes="32x32"
        />
        <link
          href="https://res.cloudinary.com/dpb42mz2q/image/upload/v1760635198/logo1_b0wg2t.jpg"
          rel="icon"
          sizes="16x16"
        />

        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="#ffffff" name="theme-color" />
        <link href="https://assets.bellroy.com" rel="preconnect" />
        <link href="https://bellroy.imgix.net" rel="preconnect" />














        <link
          href="css/webfonts-3e3c2400.css"
          rel="preload"
          as="style"
        />
        <link
          rel="stylesheet"
          href="css/webfonts-3e3c2400.css"
          media="print"
        />
        <link
          rel="stylesheet"
          href="css/style-4109db2b.css"
        />

        <link href="https://fonts.cdnfonts.com/css/sf-mono" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />


        <link href="https://fonts.cdnfonts.com/css/trade-gothic-lt-std" rel="stylesheet" />







      </>

      <body >
        <PointsWatcher />
        <Offer />
        <GifLoader />


        <BooleanProvider>
          <CartProvider>
            <Navbar2 />
            <WhatsAppIcon />
            {/* <GoogleAnalytics gaId="" /> */}
            {children}
            <Footer />
          </CartProvider>
        </BooleanProvider>

      </body>
    </html>
  )
}
