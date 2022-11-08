import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'> 
    <div className='navbar__title' onClick={() => window.location.reload(false)}>betterweather</div>
    </div>
  )
}

export default Navbar;