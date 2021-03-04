import FilterModule from "../../features/FilterModule/FilterModule";
import SortList from "../../features/SortList/SortList";
import { useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import styles from "./Sidebar.module.scss";

import StaticBackImg from "../../features/StaticBackImg/StaticBackImg";

const Sidebar = () => {
  const { isExtension } = useContext(StoreContext);

  return (
    <aside>
      <div className={styles.sidebar}>
        <StaticBackImg />
        {isExtension ? null : (
          <>
            <SortList />
            <FilterModule />
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
