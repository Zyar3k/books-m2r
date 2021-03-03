import FilterModule from "../../features/FilterModule/FilterModule";
import SortList from "../../features/SortList/SortList";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside>
      <div className={styles.sidebar}>
        <SortList />
        <FilterModule />
        <p>Sidebar</p>
      </div>
    </aside>
  );
};

export default Sidebar;
