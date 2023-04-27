const Category = () => {
  return (
    <div className="bg-white mt-1">
      <div className="max-w-[72rem] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-2 text-black">
          <div className="w-auto h-20 md:h-24 bg-[#ddd6d6] rounded-md grid place-items-center">Shirts</div>
          <div className="w-auto h-20 md:h-24 bg-[#ddd6d6] rounded-md grid place-items-center">Shirts</div>
          <div className="w-auto h-20 md:h-24 bg-[#ddd6d6] rounded-md grid place-items-center">Shirts</div>
          <div className="w-auto h-20 md:h-24 bg-[#ddd6d6] rounded-md grid place-items-center">Shirts</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
