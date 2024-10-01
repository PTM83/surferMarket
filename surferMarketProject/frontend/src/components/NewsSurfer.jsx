import { Link } from 'react-router-dom'
import newIcon from '../assets/icons/newspaper-folded.png'

export const NewsSurfer = () => {
  return (
    <>
      <Link to = '/testView' className = 'new-container'>
        <img src= { newIcon } alt = 'noticias' className='new-logo'></img>
      </Link>
    </>
  )
}
