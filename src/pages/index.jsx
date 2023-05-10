import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { About } from '@/components/About'
import { Hero } from '@/components/Hero'
import { Products } from '@/components/Products'
import { ImageSection } from '@/components/ImageSection'
import { Newsletter } from '@/components/Newsletter'
import { Faqs } from '@/components/Faqs'

export default function Home() {
  return (
    <>
      <Head>
        <title>salty</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <main>
        <Hero />
        <About />
        <Products />
        <ImageSection />
        <Faqs/>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
