import { Link } from 'react-router-dom'
import surfinAvatar  from '../assets/icons/surfer.png'

export const SurferAvatarUser = () => {
  return (
    <>
      <Link to = '/login' className='avatar-container'>
        <img src= { surfinAvatar } alt = 'avatar' className='avatar-logo'></img>
      </Link>
    </>
  )
}
