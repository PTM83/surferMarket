import { useState } from 'react'
import tableSurf from '../assets/icons/surfing-board.png'

export const SurferHeader = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); // Update the state with the user's input
  };

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img src={ tableSurf } alt='Logo' className='navbar-logo'></img>
        <h1 className='navbar-title'>surf market</h1>        
      </div>

      <input 
        type="text" 
        placeholder="Look up something..." 
        value={searchTerm} 
        onChange={handleInputChange} 
        className="search-input"
      >
      </input>

      <div className='navbar-right'>
        <img src={ tableSurf } alt='Logo' className='navbar-logo'></img>
        <h1 className='navbar-title'>surf market</h1>        
      </div>

    </nav>
  )
}
