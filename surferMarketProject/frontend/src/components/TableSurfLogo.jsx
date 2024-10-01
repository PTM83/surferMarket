import { Link } from 'react-router-dom'
import tableSurf from '../assets/icons/surfing-board.png'

export const TableSurfLogo = () => {
  return (
    <>
      <Link to = '/' className='container-left'>
        <div className='navbar-left'>
          <img src={ tableSurf } alt='Logo' className='navbar-logo'></img>
          <h1 className='navbar-title'>surf market</h1>
        </div>
      </Link>
    </>
  )
}
