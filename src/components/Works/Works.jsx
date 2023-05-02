import React from 'react'
import styles from "./Works.module.scss";
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren, textVariant2, zoomIn } from '../../utils/motion';
import { workExp } from '../../utils/data';



const Works = () => {

  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once:false, amount: 0.25 }}
    className={`paddings ${styles.wrapper}`}>

    <a className="anchor" id='work'></a>


        <div className={` flexCenter innerWidth ${styles.container}`}>
            <span className="primaryText yPaddings">My Work Experince</span>
            <div className={` flexCenter ${styles.experiences}`}>
            {workExp.map((exp, index) => { 
           return  (
            <motion.div
                variants={textVariant2}
            
             key={index} className={`flexCenter ${styles.exp}`}>
                    <div className={` ${styles.post}`}>
                        <h1>{exp.place}</h1>  
                        <p>{exp.tenure}</p>
                    </div>
                    <div className={` ${styles.role}`}>
                        <h1>{exp.role}</h1>
                        <h1>{exp.detail}</h1>
                    </div>
                </motion.div>
                
                );

            })}


            <motion.div
             variants={zoomIn(1,1)}
            
             className={styles.progressbar}>
                <motion.div variants={fadeIn("down", "tween", 2, 1.5)}  className={styles.line}></motion.div>
                <div><div className={styles.circle} style={{background: "#286F6C"}}></div></div>
                <div><div className={styles.circle} style={{background: "#f2704e"}}></div></div>
                <div><div className={styles.circle} style={{background: "#eec048"}}></div></div>

              </motion.div>



            </div>

        </div>

    </motion.section>
  )
}

export default Works