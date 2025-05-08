import React from "react";
import HeaderSwiper from "../components/HeaderSwiper";
import Search from "../components/Search";
import AnimeContainer from "../components/AnimeContainer";

function Home() {
  return (
    <>
      <HeaderSwiper />
      <Search />
      <AnimeContainer />
    </>
  );
}

export default Home;
