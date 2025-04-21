import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import TabbedInterface from "./Post/TabbedInterface";
import PostImage from "./Post/PostImage";
import PostDetailsModal from "./Post/PostDetailsModal";
import PostDetails from "./Post/PostDetails";
import useFetch, { API_BASE } from "../hooks/useFetch";

function Post() {
  const {title} = useParams();
  const decodedTitle = decodeURIComponent(title);
  const {state} = useLocation();
  console.log(title);
  console.log('location state: ',state);
  
  const {data,error,isLoading} = useFetch(`${API_BASE}/anime/${state.mal_id}/full`)
  console.log(data);
  console.log(state.mal_id);
  
  if(isLoading) return <h1>data is loading</h1>
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className="min-h-screen">
      <div className="relative flex flex-col items-center">
        <PostImage images={data.images} isLoading={isLoading} error={error}/>
        <div className="w-full relative -top-32 lg:-top-20 flex flex-col lg:flex-row items-center  gap-8 px-8 pt-5">
          <PostDetailsModal data={data} isLoading={isLoading}/>
          <PostDetails data={data} isLoading={isLoading}/>
        </div>
      </div>
      <TabbedInterface />
    </div>
  );
}


export default Post;
