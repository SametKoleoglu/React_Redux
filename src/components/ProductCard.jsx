import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { useNavigate } from "react-router-dom";
import { modalFunc } from "../redux/modalSlice";

const ProductCard = ({ data }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${data?.id}`);
    // dispatch(updateDataFunc(data));
  };

  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img src={data?.url} className="w-full h-full rounded-md" />
      <div className="absolute bottom-0 left-0 bg-indigo-600 text-white w-full px-3">
        <div className="text-lg font-semibold">{data?.name}</div>
        <div>{data?.price} €</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-0 right-2"
      >
        <BsThreeDots color="#000" size={23} />
      </div>
      {openEdit && (
        <div className="bg-black border border-white text-white absolute top-5 right-2 rounded-md cursor-pointer">
          <div
            onClick={() => dispatch(deleteDataFunc(data?.id))}
            className="hover:text-indigo-500"
          >
            SİL
          </div>
          <div onClick={updateFunc} className="hover:text-indigo-500">
            GÜNCELLE
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
