import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export const Header=({changeBack})=>{
    return (
        <header>
            <div>
            <div className="topNav">
                <Image src={'/images/logo_black.png'} alt="logo" width={50} height={50} />
              <nav>
                <ul>
                    <li>
                        <Link href="/" passHref legacyBehavior>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events" passHref legacyBehavior>
                          <a>Events</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about-us" passHref legacyBehavior>
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                      
                       <button onClick={changeBack}>B/W</button>
                    
                    </li>
                </ul>
               
                
                
              </nav> 
              
            </div>
            <p className="title"> Sed ut perspiciatis unde omnis</p>
            </div>
            
      </header>
    )
}