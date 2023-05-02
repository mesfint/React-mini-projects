import React from 'react'
import styles from './Portfolio.module.scss'
import { fadeIn, staggerChildren } from '../../utils/motion'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <motion.section
     variants={staggerChildren}
     initial="hidden"
     whileInView="show"
     viewport={{ once:false, amount: 0.25}}
     className={` paddings ${styles.wrapper}`}>

<a id="portfolio" className="anchor"></a>
        <div className={` flexCenter innerWidth ${styles.container}`}>


                <div className={` flexCenter ${styles.heading}`}>
                   <div>
                    <span className='primaryText'>
                        My Latest Works
                    </span>
                    <p style={{marginTop: "10px"}}>Perfect Solution for digital experience</p>
                   </div>
                <span className="secondaryText">
                    Explore More Works 
                </span>

                </div>



                {/* Images */}
                <div className={`flexCenter ${styles.showCase}`}>
                     <motion.img
                      variants={fadeIn("up", "tween", 0.5, 0.6)}
                      src="./showCase1.png" alt="project" />


                      <motion.img
                      variants={fadeIn("up", "tween", 0.7, 0.6)}
                      src="./showCase2.png" alt="project" />

                      <motion.img
                      variants={fadeIn("up", "tween", 0.9, 0.6)}
                      src="./showCase3.png" alt="project" />

                </div>

        </div>

    </motion.section>
  )
}

export default Portfolio