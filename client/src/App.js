import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import MainView from "./components/views/MainView/MainView";

import StoreProvider from "./store/StoreProvider";

const App = () => {
  return (
    <StoreProvider>
      <Header />
      <div className='contentContainer'>
        <Sidebar />
        <MainView />
      </div>
      <Footer />
    </StoreProvider>
  );
};

export default App;
