import tableSurf from '../assets/icons/surfing-board.png'

export const SurferHeader = () => {
  return (
    <nav className='navbar'>
      <img src={ tableSurf } alt='Logo' className='navbar-logo'></img>
      <h1 className='navbar-title'>surf market</h1>
    </nav>
  )
}
