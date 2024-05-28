import Image from 'next/image'
import Hero from './_components/Hero'
import ProductSection from './_components/ProductSection'
export default function Home() {
  return (
    <div>
      <Hero/>

      {/* Latest product Section  */}
      <ProductSection/>

    </div>
  )
}
