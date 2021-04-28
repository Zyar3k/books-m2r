import { Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import MainView from "./components/views/MainView/MainView";
import BookExtension from "./components/views/BookExtension/BookExtension";
import Contact from "./components/views/Contact/Contact";
import ThankYou from "./components/views/ThankYou/ThankYou";

import StoreProvider from "./store/StoreProvider";
import DynamicBgdImg from "./components/features/DynamicBgdImg/DynamicBgdImg";

const App = () => {
  return (
    <StoreProvider>
      <Header />
      <div className='contentContainer'>
        <DynamicBgdImg />
        <Sidebar />
        <Switch>
          <Route exact path='/' component={MainView} />
          <Route path='/book/:id' component={BookExtension} />
          <Route path='/contact' component={Contact} />
          <Route path='#/thank-you' component={ThankYou} />
        </Switch>
      </div>
      <Footer />
    </StoreProvider>
  );
};

export default App;
