import React from 'react'
import styles from './People.module.scss'
import { motion } from 'framer-motion'
import { footerVariants, staggerChildren } from '../../utils/motion'
import Slider from 'react-slick'
import { comments, sliderSettings } from '../../utils/data'

const People = () => {
  return (
    <motion.section
    
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once:false, amount: 0.25 }}
    className={`paddings ${styles.wrapper}`}>
        <a className="anchor" id='people'></a>
         <motion.div 
            variants={footerVariants}
           
         
         className={`yPaddings innerWidth ${styles.container}`}>
            <div className={`flexCenter ${styles.heading}`}>
                <span className="primaryText">
                    People talk about us
                </span>
                <p style={{marginTop:"2rem"}}>
                    I got a job that was in accordance with my skills and preferences. I am very happy with the service provided by the team of Jobberman. They are amazing.
                </p>
                <p>The process of submitting an application was quite Cosy</p>

            </div>

            {/* carousal */}
            <div className={`yPaddings ${styles.comments}`}>
                <Slider 
                {...sliderSettings}
                className={styles.slider}>
                
                {comments.map((comment, index) => {
                    return(
                        <div key={index} className={`flexCenter ${styles.comment}`}>
                        <img src={comment.img} alt="" />
                        <p>{comment.comment}</p>

                        <div className={styles.line}></div>
                        <div className={styles.bio}>
                            <span className="secondaryText">{comment.name}</span>
                            <span className="secondaryText">{comment.post}</span>
                        </div>
                        </div>
                    )
                })}

                </Slider>
            </div>
         </motion.div>

    </motion.section>
  )
}

export default People