import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import ProductList from "./pages/ProductList";
import { useState } from "react";
import { NAVIGATION } from "./utils/constants";
import styled from "styled-components";

const UnfinishedPage = styled.div`
  grid-column: 2 / span 4;

  * {
    text-align: center;
    font-size: 30px;
    color: red;
  }
`;

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  const [pageId, setPageId] = useState(NAVIGATION.HOME);

  let page;
  switch (pageId) {
    case NAVIGATION.HOME:
      page = <Home changePage={setPageId} />;
      break;
    case NAVIGATION.SHOP:
      page = (
        <UnfinishedPage>
          <ProductList />
        </UnfinishedPage>
      );
      break;
    default:
      page = (
        <UnfinishedPage>
          <h1>This page doesn't exist yet.</h1>
        </UnfinishedPage>
      );
  }

  return (
    <>
      <main>
        <Navigation changePage={setPageId} activePage={pageId} />
        {page}
        <Footer />
      </main>
    </>
  );
}

export default App;
