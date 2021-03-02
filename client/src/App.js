import { Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import MainView from "./components/views/MainView/MainView";
import BookExtension from "./components/views/BookExtension/BookExtension";

import StoreProvider from "./store/StoreProvider";

const App = () => {
  return (
    <StoreProvider>
      <Header />
      <div className='contentContainer'>
        <Sidebar />
        <Switch>
          <main>
            <Route exact path='/' component={MainView} />
            <Route path='/book/:id' component={BookExtension} />
          </main>
        </Switch>
      </div>
      <Footer />
    </StoreProvider>
  );
};

export default App;
