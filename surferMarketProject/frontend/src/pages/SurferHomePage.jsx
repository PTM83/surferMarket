import { SurferFooter } from '../components/SurferFooter';
import { SurferHeader } from '../components/SurferHeader';
import NavigationButtons from '../components/NavigationButtons'; 
import Noticias from '../components/Noticias'; 
import evoluciona from '../assets/icons/evoluciona.png';

export const SurferHomePage = () => {
  return (
    <>
      <SurferHeader />

      <NavigationButtons />
      <div>
        <img src={evoluciona} alt="probando git push" style={{ width: '900px', height: 'auto' }} />
      </div>
      
      
        <Noticias />
      

      <SurferFooter />
    </>
  );
};
