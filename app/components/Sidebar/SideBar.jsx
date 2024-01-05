"use client"
import styles from "./sidebar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDashboard, faEnvelope, faMessage, faBoxes, faContactBook, faCalendar, faShop, faFileInvoice, faBookBookmark, faCog, faColumns, faArrowRight, faAngleDown, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import CircleNotification from "../CircleNotification/CircleNotification";
import { useState } from "react";

function Sidebar(){
    const [open, setOpen] = useState(false);

    return <div id={styles.sidebar} className={open?"max-h-full":"max-h-[10vh]"}>
        <div id={styles.header}>
           <h2 className="text-white">weframetech</h2>
           <FontAwesomeIcon icon={faBars} className="cursor-pointer icons text-[#7879F1]" onClick={()=>setOpen(!open)}/>
        </div>

        <div id={styles.menu}>
           <h2 className="text-white">Main Menu</h2>
           <div className={styles.linkItem}>
            <FontAwesomeIcon icon={faDashboard} className="icons text-[#464366]"/>
            <span className="text-[#464366]">Dashboard</span>
           </div>

           <div className={styles.linkItem}>
            <FontAwesomeIcon icon={faEnvelope} className="icons text-[#464366]"/>
            <span className="text-[#464366]">Email</span>
            <CircleNotification text={"17"} />
            <FontAwesomeIcon icon={faAngleDown} className="icons text-[#7879F1]"/>
           </div>

           <div className={styles.linkItem}>
            <FontAwesomeIcon icon={faMessage} className="icons text-[#7879F1]"/>
            <span className="text-[#7879F1]">Chat</span>
           </div>

           <div className={styles.linkItem}>
            <FontAwesomeIcon icon={faBoxes} className="icons text-[#6418C3]"/>
            <span className="text-[#6418C3]">Kanban</span>
            <FontAwesomeIcon icon={faAngleRight} className="icons text-[#7879F1] ml-[32px]"/>
           </div>

           <div className={styles.linkItem}>
            <FontAwesomeIcon icon={faContactBook} className="icons text-[#7879F1]"/>
            <span className="text-[#7879F1]">Contact</span>
            <span className={`bg-[#E328AF] rounded-lg mx-2 text-white text-[10px] w-8 h-4 text-center`}>NEW</span>
           </div>

           <div className={styles.linkItem}>
            <FontAwesomeIcon icon={faCalendar} className="icons text-[#7879F1]"/>
            <span className="text-[#7879F1]">Calender</span>
           </div>

           <div className={styles.linkItem}>
            <FontAwesomeIcon icon={faBookBookmark} className="icons text-[#464366]"/>
            <span className="text-[#7879F1]">Courses</span>
            <FontAwesomeIcon icon={faAngleRight} className="icons text-[#7879F1] ml-[32px]"/>
           </div>

           <div className={styles.linkItem}>
            <FontAwesomeIcon icon={faShop} className="icons text-[#464366]"/>
            <span className="text-[#7879F1]">Shop</span>
           </div>

           <div className={styles.linkItem}>
            <FontAwesomeIcon icon={faFileInvoice} className="icons text-[#7879F1]"/>
            <span className="text-[#7879F1]">Invoices</span>
            <FontAwesomeIcon icon={faAngleRight} className="icons text-[#7879F1] ml-[32px]"/>
           </div>

           <div className={styles.linkItem}>
            <FontAwesomeIcon icon={faCog} className="icons text-[#7879F1]"/>
            <span className="text-[#7879F1]">Setting</span>
           </div>
        </div>

        <div id={styles.banner}>
           <FontAwesomeIcon icon={faColumns} className="icons"/>
           <p className="text-[15px] my-2 relative z-10">Increase your work with kanban</p>
           <FontAwesomeIcon icon={faArrowRight} className="icons"/>
           <div className={styles.shadow}></div>
        </div>
    </div>

}

export default Sidebar;
