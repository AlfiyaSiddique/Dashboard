import Navbar from "./components/Navbar/Navbar"
import Content from "./components/Content/Content"
import Sidebar from "./components/Sidebar/SideBar"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.mainContainer}>
        <Sidebar />
          <div>
          <Navbar />
          <Content />
          </div>
      </div>
    </main>
  )
}
