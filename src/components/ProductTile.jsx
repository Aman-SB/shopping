import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slice/cart-slice"

export default function ProductTile({ product }) {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id));
    }

    return (
        <div className="group flex flex-col items-center border-2 border-black gap-3 p-4 h-[400px] mt-10 ml-5 rounded-xl">
            <div className="h-[180px] ">
                <img
                    src={product?.thumbnail}
                    alt={product?.title}
                    className="object-cover h-full w-full"
                />
            </div>
            <div className="">
                <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
                    Title : {product?.title}
                </h1>
                <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
                    Price : {product?.price}
                </h1>
            </div>
            <div className="flex items-center justify-center w-full mt-5">
                <button
                    className="bg-black text-white border-2 rounded-lg font-bold p-4"
                    onClick={cart.some((item) => item.id === product.id) ? handleRemoveFromCart : handleAddToCart}
                >
                    {" "}
                    {cart.some((item) => item.id === product.id)
                        ? "Remove from cart"
                        : "Add to Cart"}
                </button>
            </div>
        </div>
    );
}
