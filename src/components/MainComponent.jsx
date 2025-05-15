import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Post from "./Post/Post";
import PostsLayout from "./PostsLayouts/PostsLayout";
import MainPosts from "./PostsLayouts/MainPosts";
import Login from "../pages/Account/Login";
import Account from "../pages/Account/Account";
import Characters from "../pages/Characters";
import SinglrCharacterDetail from "./Characters/SingleCharacterDetail";
import Posts from "../pages/Posts";
import { CharacterAnimeProvider } from "./Characters/context/CharacterAnimeContext";

const sidebarLinks = [
  {
    id: 1,
    name: "صفحه اصلی",
    icon: "https://flix3drama.com/_app/immutable/assets/home-ed2012c8.svg",
    path: "dj",
  },
  {
    id: 2,
    name: "فیلم و سریال ها",
    icon: "https://flix3drama.com/_app/immutable/assets/video-square-8e982d65.svg",
    path: "dj",
  },
  {
    id: 3,
    name: "بازیگران",
    icon: "https://flix3drama.com/_app/immutable/assets/profile-2user-5befa9bb.svg",
    path: "dj",
  },
  {
    id: 4,
    name: "چی ببینم؟",
    icon: "https://flix3drama.com/_app/immutable/assets/play-cricle-d6bcaaec.svg",
    path: "dj",
  },
  {
    id: 5,
    name: "جدول پخش هفتگی",
    icon: "https://flix3drama.com/_app/immutable/assets/calendar-496301c3.svg",
    path: "dj",
  },
];

function MainComponent() {
  return (
    <main className="bg-background-light dark:bg-background-dark min-h-lvh">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="posts" element={<Posts/>}>
            <Route index element={<MainPosts />} />
            <Route path=":category" element={<MainPosts />} />
          </Route>

          <Route path="post/:title" element={<Post />} />

          <Route path="characters" element={<Characters />} />

          <Route path="character/:characterId" element={<SinglrCharacterDetail/>} />

        </Route>
        <Route path="account/:page" element={<Account/>}/>
      </Routes>
    </main>
  );
}

export default MainComponent;
