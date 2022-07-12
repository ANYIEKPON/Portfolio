import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar() {

    // const [ expandNavbar, setExpandNavbar ] = useState(false);
    // const location = useLocation();

    // useEffect(() => {
    //     setExpandNavbar(true)
    // }, [location])


  return (
   <div className='top'>
        <div className='links'>
            <button className='button'><Link to='/' className='href'> Home </Link></button>
            <button className='button'><Link to='/portfolio' className='href'> Portfolio </Link></button>
            <button className='button'><Link to='/contact' className='href'> Contact </Link></button>
        </div>
  </div>
   
  )
}

export default Navbar;