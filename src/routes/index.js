import { Routes, Route } from "react-router-dom";
import { ContractAdressContextProvider } from "contexts/collection";
import Dashboard from "../pages/Dashboard";
import Traits from "../pages/Trending";
import Drops from "../pages/Drops";
import ExpectedPnl from "../pages/ExpectedPnl";
import ApiensOfficials from "../pages/ApiensOfficials";
import Collection from "../pages/Collection";
import Home from "../pages/Home";

const index = () => {
  return (
    <ContractAdressContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trending" element={<Traits />} />
        <Route path="/drops" element={<Drops />} />
        <Route path="/panel" element={<ExpectedPnl />} />
        <Route path="/collection/:slug" element={<Collection />} />
        <Route path="/apiens" element={<ApiensOfficials />} />
      </Routes>
    </ContractAdressContextProvider>
  );
};

export default index;
