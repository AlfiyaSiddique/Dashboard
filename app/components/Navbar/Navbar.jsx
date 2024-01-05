"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendar,
  faCaretDown,
  faSearch,
  faSquareCheck,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CircleNotification from "../CircleNotification/CircleNotification";

function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  return (
    <nav
      className="text-white flex justify-around align-center"
      id={styles.navbar}
    >
      <div className="relative">
        <input className={styles.input} type="text" placeholder="Search here" />
        <FontAwesomeIcon
          icon={faSearch}
          className="text-[#7879F1] icon text-[12px] absolute top-3 left-2 mr-2"
        />
      </div>
      <Link href={"/"} className="text-[#6418C3] underline">
        Other Menus
      </Link>
      <ul className="flex w-[10vw] justify-between">
        <li className="relative">
          <FontAwesomeIcon icon={faBell} className="icon text-[#7879F1]" />
          <div className="absolute top-[-4px]">
            <div
              className={`bg-[#5ECFFF] rounded-lg mx-2 text-black  text-[10px] w-4 h-4 text-center`}
            >
              <strong>12</strong>
            </div>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faTv} className="icon text-[#464366]" />
          <div className="absolute top-1">
            <div
              className={`bg-[#5ECFFF] rounded-lg mx-2 text-black  text-[10px] w-4 h-4 text-center`}
            >
              <strong>5</strong>
            </div>
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faSquareCheck}
            className="icon text-[#7879F1]"
          />
            <div className="absolute top-1">
            <div
              className={`bg-[#5ECFFF] rounded-lg mx-2 text-black  text-[10px] w-4 h-4 text-center`}
            >
              <strong>2</strong>
            </div>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} className="icon text-[#7879F1]" />
          <div className="absolute top-1">
            <div
              className={`bg-[#E328AF] rounded-lg mx-2 text-black  text-[10px] w-4 h-4 text-center`}
            >
              <strong>!</strong>
            </div>
          </div>
        </li>
      </ul>
      <div className={styles.langdiv} i>
        <li className="list-none text-sm">
          <span className="flag-icon flag-icon-us me-1"></span>{" "}
          <span>English</span>
          <FontAwesomeIcon
            icon={faCaretDown}
            className="text-[#6418C3] icon mx-1 cursor-pointer"
            onClick={() => setLangOpen(!langOpen)}
          />
        </li>
        {langOpen && (
          <div className={styles.langdropdown}>
            <li
              className="list-none text-sm cursor-pointer hover:bg-[#15132B]"
              onClick={() => setLangOpen(!langOpen)}
            >
              <span className="flag-icon flag-icon-fr me-1"></span>{" "}
              <span>French</span>
            </li>
            <li
              className="list-none text-sm cursor-pointer hover:bg-[#15132B]"
              onClick={() => setLangOpen(!langOpen)}
            >
              <span className="flag-icon flag-icon-es me-1"></span>{" "}
              <span>Spanich</span>
            </li>
            <li
              className="list-none text-sm cursor-pointer hover:bg-[#15132B]"
              onClick={() => setLangOpen(!langOpen)}
            >
              <span className="flag-icon flag-icon-sa me-1"></span>{" "}
              <span>Arabic</span>
            </li>
            <li
              className="list-none text-sm cursor-pointer hover:bg-[#15132B]"
              onClick={() => setLangOpen(!langOpen)}
            >
              <span className="flag-icon flag-icon-in me-1"></span>{" "}
              <span>Hindi</span>
            </li>
          </div>
        )}
      </div>
      <div id="profile" className="flex justify-between">
        <div className="w-8 h-8 rounded bg-[#C4C4C4] mx-6"></div>
        <div>
          <p className="text-sm">Instructor Day</p>
          <p className="text-xs text-[#7879F1]">Super Admin</p>
        </div>

        <FontAwesomeIcon icon={faCaretDown} className="m-4" />
      </div>
    </nav>
  );
}

export default Navbar;
