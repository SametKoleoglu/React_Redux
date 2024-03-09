import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";

const Header = () => {
  const dispacth = useDispatch();

  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl">React Redux</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select
            onChange={(e) => dispacth(searchDataFunc(e.target.value))}
            name=""
            id=""
            className="h-10 rounded-lg "
          >
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>
        <input
          type="text"
          className="h-10 rounded-lg px-4 text-black"
          placeholder="Arama Yapınız..."
        />
        <div
          onClick={() => dispacth(modalFunc())}
          className="bg-indigo-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:transition-all hover:bg-indigo-300 "
        >
          <MdPostAdd />
        </div>
      </div>
    </div>
  );
};

export default Header;
