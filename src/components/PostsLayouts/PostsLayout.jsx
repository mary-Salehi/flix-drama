import React from "react";
import { Outlet, useParams } from "react-router-dom";
import PostsFilter from "./PostsFilter";
import PostsPlaylist from "./PostsPlaylist";

function PostsLayout() {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-start">
      <PostsFilter/>
      <div className="w-full p-4">
        <PostsPlaylist/>
        <div className="px-5">
          {/* dynamic posts */}
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default PostsLayout;
