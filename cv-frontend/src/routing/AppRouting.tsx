import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import {
  HomePage,
  PortfolioPage,
  KontaktPage,
  NotFoundPage,
} from "../pages";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ShowcasePage from "../pages/ShowcasePage";
import { appStyles, colorVariables } from "../styles/styles";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <div className={appStyles.shell} style={colorVariables}>
        <div className={appStyles.overlay}>
          <Header />
          <div className={appStyles.routeArea}>
            <main className={appStyles.contentBackground}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/cv" element={<Navigate to="/" replace />} />
                <Route path="/kontakt" element={<KontaktPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/showcase/:id" element={<ShowcasePage />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouting;
