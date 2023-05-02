import React from 'react'
import styles from './Footer.module.scss'
import { motion } from 'framer-motion'
import { footerVariants, staggerChildren } from '../../utils/motion'


const Footer = () => {
  return (
    <motion.section
   
   variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once:false, amount: 0.25 }}   
    
     className={`paddings ${styles.wrapper}`}>
        <motion.div 
        variants={footerVariants}
        
        className={`innerWidth yPaddings flexCenter ${styles.container}`}>
            <div className={styles.left}>
            <span className="primaryText">
                Let's make something <br /> amazing together.

            </span>
            <span className="primaryText">
                Start by <a href='mesfin2006@gmail.com'>saying hello</a> 
            </span>
            </div>
            <div className={styles.right}>
                 <div className={styles.info}>
                 <span className="secondaryText">Information</span>
                 <p>145 New York, FL 5467, USA</p>

                 </div>
                 <div className={styles.menu}>
                    <li>Services</li>
                    <li>Works</li>
                    <li>Notes</li>
                    <li>Experience</li>
                 </div>

            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer