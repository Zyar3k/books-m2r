import FilterModule from "../../features/FilterModule/FilterModule";
import SortList from "../../features/SortList/SortList";
import styles from "./Sidebar.module.scss";

import StaticBackImg from "../../features/StaticBackImg/StaticBackImg";

const Sidebar = () => {
  return (
    <aside>
      <div className={styles.sidebar}>
        <StaticBackImg />
        <SortList />
        <FilterModule />
      </div>
    </aside>
  );
};

export default Sidebar;
