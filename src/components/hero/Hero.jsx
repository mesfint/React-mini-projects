import React from 'react'
import styles from './Hero.module.scss'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';

const Hero = () => {
  return (
    <section className={`paddings ${styles.wrapper}`}> 
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        
        className={` innerWidth ${styles.container}`}>

             {/* upper elements */}
              <div className={styles.upperElements}>
                 <motion.span
                 variants={fadeIn("right", "tween", 0.2, 1)}//direction, type, delay, duration
                 
                  className='primaryText'>Hey There, <br /> I'm Mesfin</motion.span>
                 <motion.span
                   variants={fadeIn("left", "tween", 0.4, 1)}//direction, type, delay, duration
                 className='secondaryText'
                 > I design beautifully simple

                  <br/>
                  things, And I love what i do
                 
                 </motion.span>
              </div>

              {/* person image Element*/}
              <motion.div
                variants={fadeIn("up", "tween", 0.6, 1)}//direction, type, delay, duration
              
               className={styles.person}>
                    <motion.img
                    variants={slideIn("up", "tween", 0.8, 1)}//direction, type, delay, duration

                     src="./person.png" alt="" />

              </motion.div>
              {/* email */}
              <a href="mailto:mesfintdev@gmail.com" className={styles.email}>
              mesfintdev@gmail.com
                </a>
        

                {/* lower Elements*/}
              <div className={styles.lowerElements}>
                <motion.div
                  variants={fadeIn("right", "tween", 0.2, 1)}//direction, type, delay, duration
                
                 className={styles.experience}>
                    <div className="primaryText">10</div>
                    <div className={styles.secondaryText}>
                        <div>Years</div>
                        <div>Experience</div>
                    </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("left", "tween", 0.4, 1)}//direction, type, delay, duration
                 className={styles.certificate}>
                    <img src="./certificate.png" alt="" />
                    <span>IDF CERTIFIED PROFATIONAL</span>
                    <span>UI/UX DESIGNER</span>
                </motion.div>
              </div>
        </motion.div>

    </section>
  )
}

export default Hero