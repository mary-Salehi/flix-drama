import React from "react";
import AnimeContainer from "../components/AnimeContainer";
import HeaderSwiper from "../components/Swiper/HeaderSwiper";
import Search from "../components/search/Search";

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
