import React from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import CharacterCard from "../Characters/CharacterCard";

function CastAndCrewTab() {
  const { state } = useLocation();
  const { data, error, isLoading } = useFetch(
    `https://api.jikan.moe/v4/anime/${state.mal_id}/characters`
  );
  console.log("characters are  ", data);

  if(isLoading) return <div className="dark:text-white textxl font-bold p-6">در حال بارگذاری کاراکترها</div>
  if(error) return <div className="dark:text-white textxl font-bold p-6">کاراکتری وجود ندارد</div>


  // Separate characters by role
  const mainCharacters = data.filter((item) => item.role === "Main");
  const supportingCharacters = data.filter((item) => item.role !== "Main");

  return (
    <div className="dark:text-white p-6">
      <h1 className="dark:text-white text-xl font-bold mb-8">کاراکترها</h1>
      <div className="space-y-8">
        <div className="flex flex-wrap justify-center sm:justify-start gap-6">
        {mainCharacters.map((item) => {
          return <CharacterCard item={item} key={item.character.mal_id} />;
        })}
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-6">
        {supportingCharacters.map((item) => {
          return <CharacterCard item={item} key={item.character.mal_id} />;
        })}
      </div>
      </div>
    </div>
  );

}


export default CastAndCrewTab;
