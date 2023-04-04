import React, { useEffect, useState } from "react";
import Sub from "./Sub";
import "./SubList.css";

const SubList = () => {
    const[basic,setBasic] = useState(9.99)
    const[pro,setPro] = useState(19.99)
    const[master,setMaster] = useState(29.99)
    const[yearly,setYearly] = useState(false)




    const handleYearly=()=>{
       
        setYearly(!yearly)
    }

    useEffect(()=>{
        if(yearly){
            setBasic((9.99*12*0.7).toFixed(0))
            setPro((19.99*12*0.7).toFixed(0))
            setMaster((29.99*12*0.7).toFixed(0))
        }else{
            setBasic(9.99)
            setPro(19.99)
            setMaster(29.99)
        }
    },[yearly])
   
  return (
    <section className="main">
      <div className="container --center-all">
        <div className="title">
          <h2>Pricing</h2>
          <div className="--line"></div>
          <div className="--flex-center --my2">
            <p>Monthly</p>
            <div className="--mx2">
              <span className={yearly ? "toggle-btn toggled" : "toggle-btn"} onClick={handleYearly}>
                <div className={yearly ? "ball move" : "ball"}></div>
              </span>
            </div>
            <p>Yearly</p>

          
          </div>
        </div>
    <div className="sub-plans">
        <Sub plan="Basic" price={basic } theme={"theme1"}   isBasic={true} yearly={yearly} />
        <Sub plan="Pro" price={pro}  theme={"theme2"} isPro={true}  item1="Email Support" item2="10 Backup" item3="Github Tool" />
        <Sub plan="Master" price={master} isMaster={true} theme={"theme3"}   item1="20 Backups" item2="Push Notifications" item3="Priority Support"/>
    </div>


      </div>
    </section>
  );
};

export default SubList;
