
function TitleWithActions({title , subTitle ,children}) {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <span className="md:text-2xl text-xl font-bold dark:text-white">
          {title}
        </span>
        <p className="text-[#9E9E9E] text-lg">
          {subTitle}
        </p>
      </div>
      <div className="flex gap-2">
        {children}
      </div>
    </div>
  );
}

export default TitleWithActions;
