
import { Navbar1 } from './components/layout/Navbar'
import { Hero1 } from './modules/HomePage/Hero'

function App() {

  return (
    <>
      <div id='hero' className='min-h-screen '>
        <Navbar1 />
        <Hero1/>
      </div>
    </>
  )
}

export default App
