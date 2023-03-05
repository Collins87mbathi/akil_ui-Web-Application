import React, { useState } from "react";
import Rating from "@mui/material/Rating/Rating";
import axios from "axios";
import { BASE_URL } from "./config/config";
// import { useDispatch } from 'react-redux';
// import { addProduct } from '../../Redux/reducers/product.reducer';

const Product = ({ prod }) => {
  const { title, price, category, image } = prod;
  const [value] = React.useState(5);
  const [showModal, setShowModal] = useState(false);
  const [updateData, setUpdateData] = useState({
    title,
    price,
    category,
    image,
  });

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(BASE_URL + `/products/${id}`);
      response && window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id, event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        BASE_URL + `/products/${id}`,
        updateData
      );
      setShowModal(false);
      response && window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  return (
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
      <div className="h-40">
        <img src={image} className="w-full h-full object-contain" alt="png" />
      </div>

      <div className="flex gap-1 flex-col p-2">
        <h3 className="font-bold">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h3>
        <p className="text-gray-500">{category}</p>
        <h3>${price}.00</h3>
        <Rating
          name="simple-controlled"
          value={value}
          // onChange={(event, newValue) => {
          //   setValue(rating.rate);
          // }}
        />
        <div className="flex items-center justify-between my-2 mb-2">
          <button
            className="bg-[#2596be] text-white px-4 py-1 rounded cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Update
          </button>
          <button
            className="text-[#2596be] border-solid border-2 border-[#2596be] px-4 py-1 rounded cursor-pointer"
            onClick={() => handleDelete(prod._id)}
          >
            Delete
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-0">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Update Product</h2>
              <form onSubmit={(event) => handleUpdate(prod._id, event)}>
                <div className="flex flex-col mb-4">
                  <label className="font-bold mb-2" htmlFor="title">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={updateData.title}
                    onChange={handleInputChange}
                    className="border rounded py-2 px-3"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="font-bold mb-2" htmlFor="category">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    value={updateData.category}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="font-bold mb-2" htmlFor="price">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={updateData.price}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#2596be] text-white px-4 py-1 rounded cursor-pointer"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
