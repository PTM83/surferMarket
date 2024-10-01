import { useState } from 'react'
import { ShoppingCart } from './ShoppingCart';
import { TableSurfLogo } from './TableSurfLogo';
import { SurferAvatarUser } from './SurferAvatarUser';
import { NewsSurfer } from './NewsSurfer';


export const SurferHeader = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); // Update the state with the user's input
    // console.log(searchTerm)
  };

  return (
    <nav className='navbar'>
      
      <TableSurfLogo />   

      <input 
        type="text" 
        placeholder="Look up something..." 
        value={searchTerm} 
        onChange={handleInputChange} 
        className="search-input"
      >
      </input>

      <div className='navbar-right'>
        <NewsSurfer />
        <ShoppingCart />
        <SurferAvatarUser />        
      </div>

    </nav>
  )
}
