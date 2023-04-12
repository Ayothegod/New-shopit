import { useState } from "react";


const Dropdown = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className="bg-black h-screen text-white">
      <div>
        <div className="">
          <button className="bg-white text-black p-2 rounded-md font-medium absolute top-4 right-4" onClick={() => setOpen(!open)}>OPEN</button>
        </div>

        <div className={open ? "bg-white text-black absolute top-20 p-4 rounded-md  text-center right-4 before:content-[''] before:absolute before:-top-1 before:right-4 before:h-3 before:w-3 before:bg-white before:rotate-45 transition transform -translate-y-1" : "hidden translate-y-4"}>
          <p className="font-semibold mb-4">The open menu</p>
          <div className=" flex flex-col gap-4">
            <div className="flex justify-between">
              <p>First</p>
              <p>1</p>
            </div>
            <div className="flex justify-between">
              <p>Second</p>
              <p>2</p>
            </div>
            <div className="flex justify-between">
              <p>Third</p>
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
