import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RequireWallet, WalletProvider } from "./data/context/walletContext";
import Unauthorized from "./components/unauthorized/unauthorized";
import { Dashboard } from "./containers/dashboard/dashboard";
// import { AccountSignup } from "./containers/signup/accountSignup";
import Header from "./components/header/header";
import { HeaderContainer } from "./containers/header/headerContainer";
// import { CreateLending } from "./containers/lendings/createLending";
// import { AccountHistory } from "./containers/history/history";
import { Faq } from "./containers/faq/faq";
// import { NftProvider } from "./data/context/nftContext";
import { ProductAuthProvider } from './data/context/ProductAuthContractContext';
import { CreateProduct } from "./containers/Product/createProductform";
import  VerifyProductPage  from "./containers/Product/VerifyProduct";
// import { Transactions } from "./containers/transactions/transactions";
import Home from "./containers/home/home";
import { Box } from "@chakra-ui/react";
import UpdateProductPage from "./containers/Product/UpdateProductPage";

const App = () => {
  return (
    <ProductAuthProvider>
      <WalletProvider>
        {/* <NftProvider> */}
          <BrowserRouter>
            <Dashboard>
              <Header>
                <Routes>

                  <Route exact   path="/" element={<CreateProduct />} />
                  <Route exact   path="/create-product" element={<CreateProduct />} />
                  <Route exact   path="/verify-product" element={<VerifyProductPage />} />
                  <Route exact   path="/update-product" element={<UpdateProductPage />} />
                  
                  {/* <Route exact   path="/verify-product" element={<AccountHistory />} /> */}
                  {/* <Route exact path="/signup" element={<AccountSignup />} /> */}
                  {/* <Route exact path="/signup" element={<CreateLoan />} /> */}
                  {/* <Route
                    exact
                    path="/products"
                    element={<Unauthorized />}
                  /> */}
                  {/* <Route exact path="/faq" element={<Faq />} /> */}

                  {/* <Route element={<RequireWallet />}>
                    <Route exact path="/create-product" element={<CreateLoan />} />
                    <Route
                      exact
                      path="/createlending"
                      element={<CreateLending />}
                    />
                    <Route exact path="/verify-product" element={<AccountHistory/>} />
                    <Route exact path="/transactions" element={<Transactions />} />
                    <Route path="*" element={<CreateLoan/>} />
                  </Route> */}
                </Routes>
              </Header>
            </Dashboard>
            <HeaderContainer />
          </BrowserRouter>
        {/* </NftProvider> */}
      </WalletProvider>
    </ProductAuthProvider>
  );
};

export default App;
