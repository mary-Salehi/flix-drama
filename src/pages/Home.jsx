import React from "react";
import HeaderSwiper from "../components/HeaderSwiper";
import Search from "../components/Search";
import DramasContainer from "../components/DramasContainer";

function Home() {
  return (
    <>
      <HeaderSwiper />
      <Search />
      <DramasContainer />
    </>
  );
}

export default Home;
