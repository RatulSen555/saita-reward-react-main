import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"; // ✅ Import your AuthContext provider

import Landing from "views/landing/Landing";
import WhitePaper from "views/landing/pages/WhitePaper";
import Tokenomics from "views/landing/pages/Tokenomics";
import Ecosystem from "views/landing/pages/Ecosystem";
import Rewards from "views/landing/pages/Rewards";
import DHRP from "views/landing/pages/DHRP";
import RewardList from "views/landing/pages/RewardList";
import Account from "views/landing/pages/Account";
import HowToBuy from "views/landing/pages/how-to-buy";
import Terms from "views/landing/pages/terms"; 
import LegalHub from "views/landing/pages/LegalHub"; 
import Token from "views/landing/pages/token";
import UrbanHalo from "views/landing/pages/UrbanHalo";
import ProductsServices from "views/landing/pages/ProductServices";
import NotFound from "views/landing/errors/NotFound";
import ProjectPage from "views/landing/pages/Project";
import NewsletterPage from "views/landing/components/Newsletterform";
import CreateAccount from "views/landing/pages/CreateAccount";
import Content from "views/landing/pages/Content";
import Boxed from "views/landing/pages/Boxed";
import Services from "views/landing/pages/Services";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider> {/* ✅ Wrap your entire app with AuthProvider */}
      <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<WhitePaper />} />
          <Route path="/raiding" element={<Tokenomics />} />
          <Route path="/shilling" element={<Ecosystem />} />
          <Route path="/marketing" element={<Rewards />} />
          <Route path="/revup" element={<DHRP />} />
          <Route path="/vault" element={<RewardList />} />
          <Route path="/account" element={<Account />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/wallet" element={<Terms />} />
          <Route path="/legal" element={<LegalHub />} />
          <Route path="/srt" element={<Token />} />
          <Route path="/marketplace" element={<UrbanHalo />} />
          <Route path="/contact" element={<ProductsServices />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/technology" element={<ProjectPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/content" element={<Content />} />
          <Route path="/boxed" element={<Boxed />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <ToastContainer /> {/* ✅ Toasts will now show anywhere in your app */}
      </>
    </AuthProvider>
  );
}

export default App;
