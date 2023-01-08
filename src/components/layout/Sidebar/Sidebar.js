import FilterModule from "../../features/FilterModule/FilterModule";
import SortList from "../../features/SortList/SortList";
import { useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import styles from "./Sidebar.module.scss";

import StaticBackImg from "../../common/StaticBackImg/StaticBackImg";
import StatsModule from "../../features/StatsModule/StatsModule";

const Sidebar = () => {
  const { isExtension } = useContext(StoreContext);

  return (
    <aside>
      <div className={styles.sidebar}>
        <StaticBackImg />

        {isExtension ? (
          <StatsModule />
        ) : (
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
