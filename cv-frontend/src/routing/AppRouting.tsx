import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import { HomePage, PortfolioPage, NotFoundPage } from "../pages";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ShowcasePage from "../pages/ShowcasePage";
import ScrollManager from "./ScrollManager";
import { appStyles } from "../styles/styles";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className={appStyles.shell}>
        <Header />
        <main className={appStyles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cv" element={<Navigate to="/" replace />} />
            <Route path="/kontakt" element={<Navigate to="/#kontakt" replace />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/showcase/:id" element={<ShowcasePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouting;
