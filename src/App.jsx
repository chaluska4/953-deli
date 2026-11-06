import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout.jsx";
import { CareersPage } from "./pages/CareersPage.jsx";
import { CateringPage } from "./pages/CateringPage.jsx";
import { GiftCardsPage } from "./pages/GiftCardsPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MenuPage } from "./pages/MenuPage.jsx";
import { PressPage } from "./pages/PressPage.jsx";
import { StoryPage } from "./pages/StoryPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/gift-cards" element={<GiftCardsPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}
