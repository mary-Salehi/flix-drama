import axios from "axios";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';

export const API_BASE = "https://api.jikan.moe/v4";

const getBestImageUrl = (anime) => {
  return (
    anime.images?.webp?.large_image_url ||
    `https://cdn.myanimelist.net/images/anime/webp/${anime.mal_id}.webp` ||
    anime.images?.jpg?.large_image_url ||
    `https://cdn.myanimelist.net/images/anime/${anime.mal_id}.jpg`
  );
}

export default function useFetch(url, query = "") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(null)

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(`${url}?${query}`, {
          signal: abortController.signal
        });
        const apiData = response.data;
        
        //optimizing images
        const optimizedData = apiData.data?.map((anime) => ({
          ...anime,
          images: {
            ...anime.images,
            optimized_url: getBestImageUrl(anime)
          }
        })) || []
        
        setData(optimizedData);
        
        // Store pagination data if available
        if (apiData.pagination) {
          setPagination(apiData.pagination);
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          setError(error)
          setData([])
          toast.error(error?.message || 'Faild to fetch data')
        }
      } finally {
        setIsLoading(false)
        
      }
    }
    if (url) {
      fetchData()
    }
    return () => {
      abortController.abort()
    }
  }, [url, query]);

  return{isLoading ,data , error, pagination}
}
