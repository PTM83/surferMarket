import { SurferCardProduct } from '../components/SurferCardProduct'
import { SurferFooter } from '../components/SurferFooter'
import { SurferHeader } from '../components/SurferHeader'

export const SurferHomePage = () => {
  return (
    <>
      <SurferHeader />
      <section className='content-container'>
        <h1>
          <SurferCardProduct/>
        </h1>
      </section>
      <SurferFooter />
    </>
  )
}
