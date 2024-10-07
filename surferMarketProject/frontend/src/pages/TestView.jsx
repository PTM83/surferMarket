
import { SurferHeader } from '../components/SurferHeader'
import { SurferFooter } from '../components/SurferFooter'
import  NavigationButtons  from '../components/NavigationButtons'

export const TestView = () => {
  return (
    <>
      <SurferHeader/>
      <NavigationButtons />
      <section className='content-container'>
        <h1>
          TestView
        </h1>
      </section>
      <SurferFooter />
    </>
  )
}

export default TestView;