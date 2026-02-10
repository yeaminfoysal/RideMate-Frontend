import Faq from '@/modules/FaqPage/Faq'
import { useEffect } from 'react'

export default function FAQPage() {

  useEffect(() => {
    document.title = "RideMate | FAQ";
  }, []);

  return (
    <div className='my-10 sm:my-16 md:my-20'>
      <Faq />
    </div>
  )
}
