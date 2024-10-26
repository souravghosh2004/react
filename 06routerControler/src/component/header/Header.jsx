import {Link,NavLink} from  'react-router-dom';
import './Header.css'

 function Header() {

    return (
        <>
            <header>
                <nav>
                   <Link className='logo'
                    to="/"
                   >
                        <img src='https://www.google.com/imgres?q=login%20brainware%20university&imgurl=https%3A%2F%2Fwww.brainwareuniversity.ac.in%2Fimages%2Fbwu-logo.svg&imgrefurl=https%3A%2F%2Fwww.brainwareuniversity.ac.in%2Fstudents.php&docid=8GoOgqexT-MXuM&tbnid=P1b-2_VMxYHwQM&vet=12ahUKEwia8KD5gauJAxW9Ri
                        oJHW87DnAQM3oECBsQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwia8KD5gauJAxW9RioJHW87DnAQM3oECBsQAA'
                        alt='LOGO'
                        />
                    </Link>
                   <ul className='all'>
                    <li >
                        <NavLink to="" 
                         className = {({isActive}) =>
                            `home-${isActive ?  'active' : 'noActive'}`
                        }
                        >
                         Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" 
                         className = {({isActive}) =>
                            `about-${isActive ?  'active' : 'noActive'}`
                        }
                        >
                         About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" 
                         className = {({isActive}) =>
                            `contact-${isActive ?  'active' : 'noActive'}`
                        }
                        >
                         Contact
                        </NavLink>
                    </li>
                   </ul>
                </nav>
            </header>
        </>
    )
 }

 export default  Header;
