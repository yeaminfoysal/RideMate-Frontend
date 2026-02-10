import { ContactSection } from '@/modules/ContactPage/ContactSection'
import { useEffect } from 'react'

export default function ContactPage() {
  
  useEffect(() => {
    document.title = "RideMate | Contact";
  }, []);

  return (
    <div className='my-10 sm:my-16 md:my-20'>
      <ContactSection />
    </div>
  )
}
