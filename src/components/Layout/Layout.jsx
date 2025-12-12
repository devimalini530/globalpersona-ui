import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.contentArea}>
        <Header />
        <div className={styles.pageContent}>{children}</div>
      </div>
    </div>
  );
}
