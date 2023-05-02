import React,{useState,useRef} from 'react'
import styles from './Header.module.scss'
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { BiMenuAltLeft, BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import userHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
 
  //to handle shadow of header
  const headerShadow= userHeaderShadow();

  const menuRef = React.useRef();

  //to make menu close when clicked outside in small and medium screens
  useOutsideAlerter({menuRef, setMenuOpened});

const handleToggleMenu = () => {
  setMenuOpened((prev) => !prev);
};


  return (
    
    <motion.div
    initial="hidden"
    whileInView="show"    
    variants={headerVariants}
    viewport={{once: false, amount: 0.25}}

     className={`paddings ${styles.wrapper}`}
     style={{boxShadow: headerShadow}}
     >

        <div className={`flexCenter innerWidth ${styles.container}`}>
           <div className={styles.name}>Mesfin</div>
           
            <ul
            ref={menuRef}
             style={getMenuStyles(menuOpened)}
            className={`flexCenter ${styles.menu}`}>
              <li><a href="#experties">Services</a></li>
              <li><a href="#work">Experience</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#people">Testimonials</a></li>
              <li className={`flexCenter ${styles.phone}`}><p>+358676438</p>
              <BiPhoneCall size={"40px"} />
              </li>
            </ul>
            {/* for small and Medium size screens */}
            <div className={styles.menuIcon}>
    <BiMenuAltRight size={"30"} onClick={handleToggleMenu}/>

            </div>

      </div>
      
    </motion.div>
  )
}

export default Header