import Login from "./pages/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify/dist/react-toastify";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import CustomizeLeadMagnet from "./pages/CustomizeLeadMagnet.jsx";
import CustomizeProductEmail from "./pages/CustomizeProductsEmail.jsx";
import Temp from "./pages/temp.jsx";
import LeadMagnet from "./pages/lead-magnet.jsx";
import { ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import SidebarForMobile from "./components/SidebarForMobile/SidebarForMobile.jsx";
import Store from "./pages/Store.jsx";
import Analytics from "./pages/Analytics.jsx"
import Payment from "./pages/Payment.jsx"
import axios from "axios";
import LeadMagnetQuiz from "./pages/LeadMagnetQuiz.jsx"
import SelectEbook from "./pages/SelectEbook.jsx"
import EbookMiniLanding from "./pages/EbookMiniLanding.jsx"
import Template1 from "./pages/Template1.jsx"
import Template1Wsidebar from "./pages/Template1Wsidebar.jsx"
import Template2 from "./pages/Template2.jsx"
import Template2Wsidebar from "./pages/Template2Wsidebar.jsx"
import Template3 from "./pages/Template3.jsx"
import Template3Wsidebar from "./pages/Template3Wsidebar.jsx"
import Template4 from "./pages/Template4.jsx"
import Template4Wsidebar from "./pages/Template4Wsidebar.jsx"
import Template5 from "./pages/Template5.jsx"
import Template5Wsidebar from "./pages/Template5Wsidebar.jsx"
import VideoMiniLanding from "./pages/VideoMiniLanding.jsx";
import ProductMiniLanding from "./pages/ProductMiniLanding.jsx";


import SelectVideo from "./pages/SelectVideo.jsx"
import SelectProduct from "./pages/SelectProduct.jsx"
import PageEditor1 from "./pages/PageEditor1.jsx"
import PageEditor2 from "./pages/PageEditor2.jsx"
import PageEditor3 from "./pages/PageEditor3.jsx"
import PageEditor4 from "./pages/PageEditor4.jsx"
import Plan from "./pages/Plan.jsx"
import Sales from "./pages/Sales.jsx"
import LandingPage from "./pages/LandingPage.jsx";

// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.baseURL = 'https://api.linkleads.ai';
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // window.location.href = '/auth';
      console.log(error.response);
    }
    return Promise.reject(error);
  }
);

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#28439D",
    },
    secondary: {
      main: "#F7F8FA",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

function App() {
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route index element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/api/auth/callback/gitlab" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Wrapper Page={Dashboard} />} />
          <Route path="/payment" element={<Wrapper Page={Payment} />} />
          <Route path="/lead-magnet" element={<Wrapper Page={LeadMagnet} />} />
          <Route
            path="/customize-lead-magnet"
            element={<Wrapper Page={CustomizeLeadMagnet} />}
          />
          <Route
            path="/customize-products-email"
            element={<Wrapper Page={CustomizeProductEmail} />}
          />
          <Route path="/my-page" element={<Wrapper Page={Temp} />} />
          <Route path="/page-editor" element={<Wrapper Page={Temp} />} />
          <Route path="/store" element={<Wrapper Page={Store} />} />
          <Route path="/analytics" element={<Wrapper Page={Analytics} />} />
          <Route path="/questionnaire" element={<Wrapper Page={Temp} />} />
          <Route path="/feedback" element={<Wrapper Page={Temp} />} />
          <Route path="/support" element={<Wrapper Page={Temp} />} />
          <Route path="/lead-magnet-quiz" element={<Wrapper Page={LeadMagnetQuiz} />} />
          <Route path="/select-ebook" element={<Wrapper Page={SelectEbook} />} />
          <Route path="/ebook-mini-landing" element={<Wrapper Page={EbookMiniLanding} />} />
          <Route path="/template1" element={<Wrapper Page={Template1} />} />
          <Route path="/template1wsidebar" element={<Wrapper Page={Template1Wsidebar} />} />
          <Route path="/template2" element={<Wrapper Page={Template2} />} />
          <Route path="/template2wsidebar" element={<Wrapper Page={Template2Wsidebar} />} />
          <Route path="/template3" element={<Wrapper Page={Template3} />} />
          <Route path="/template3wsidebar" element={<Wrapper Page={Template3Wsidebar} />} />
          <Route path="/template4" element={<Wrapper Page={Template4} />} />
          <Route path="/template4wsidebar" element={<Wrapper Page={Template4Wsidebar} />} />
          <Route path="/template5" element={<Wrapper Page={Template5} />} />
          <Route path="/template5wsidebar" element={<Wrapper Page={Template5Wsidebar} />} />
          <Route path="/select-video" element={<Wrapper Page={SelectVideo} />} />
          <Route path="/video-mini-landing" element={<Wrapper Page={VideoMiniLanding} />} />
          <Route path="/select-product" element={<Wrapper Page={SelectProduct} />} />
          <Route path="/product-mini-landing" element={<Wrapper Page={ProductMiniLanding} />} />
          <Route path="/page-editor1" element={<Wrapper Page={PageEditor1} />} />
          <Route path="/page-editor2" element={<Wrapper Page={PageEditor2} />} />
          <Route path="/page-editor3" element={<Wrapper Page={PageEditor3} />} />
          <Route path="/page-editor4" element={<Wrapper Page={PageEditor4} />} />
          <Route path="/plan" element={<Wrapper Page={Plan} />} />
          <Route path="/sales" element={<Wrapper Page={Sales} />} />
          <Route path="/landing-page" element={<LandingPage/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

const Wrapper = ({ Page }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="">
      {/* <div className="dashboard_container flex"> */}
      <div
        className="sticky top-0 z-50 p-2 text-4xl bg-primary text-white lg:hidden"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <HiOutlineBars3 />
      </div>

      {openMenu && (
        <>
          <SidebarForMobile openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </>
      )}

      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      <div className="min-h-screen flex-grow lg:ml-20">
        {/* <div className="min-h-screen flex-grow lg:ml-20"> */}
        <Page></Page>
      </div>
    </div>
  );
};

export default App;
