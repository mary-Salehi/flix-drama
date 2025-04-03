
function PostImage() {
  return (
    <div className="w-full [mask-image:linear-gradient(to_top,transparent_0%,white)] dark:[mask-image:linear-gradient(to_top,transparent_0%,yellow-70%)]">
      <img
        className="h-[240px] w-full object-cover"
        src="https://uploadcenter.flix3drama.com/images/posters/d86Hza17AA.webp"
        alt="drama-img"
      />
      <div className="absolute inset-0 bg-gradient-to-b dark:from-primary-2-dark opacity-0"></div>
    </div>
  );
}

export default PostImage