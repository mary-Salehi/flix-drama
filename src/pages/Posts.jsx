import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Anime from "../components/Anime";
import PostsLayout from "../components/PostsLayouts/PostsLayout";


function Posts() {
  return (
    <PostsLayout/>
  );
}

export default Posts;
