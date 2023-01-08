import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import MainView from "./components/views/MainView/MainView";
import BookExtension from "./components/views/BookExtension/BookExtension";
import Contact from "./components/views/Contact/Contact";
import ThankYou from "./components/views/ThankYou/ThankYou";

import StoreProvider from "./store/StoreProvider";
import DynamicBgdImg from "./components/common/DynamicBgdImg/DynamicBgdImg";

const App = () => {
  return (
    <StoreProvider>
      <Header />
      <div className="contentContainer">
        <DynamicBgdImg />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<MainView />} />
          <Route path="/book/:id" element={<BookExtension />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
      <Footer />
    </StoreProvider>
  );
};

export default App;
