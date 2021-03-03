import SortList from "../../features/SortList/SortList";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside>
      <div className={styles.sidebar}>
        <SortList />
        <p>Sidebar</p>
      </div>
    </aside>
  );
};

export default Sidebar;
