import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductTile from "../components/ProductTile";
import { checkOut } from "../store/slice/cart-slice";

export default function Cart() {
    const [totalCart, setTotalCart] = useState(0);
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state);

    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    const handleCheckOut = () => {
      dispatch(checkOut())
    }

    console.log(cart, totalCart);

    return (
        <div className="flex justify-center">
            {cart && cart?.length ? (
                <>
                <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mr-4 h-20">
                    {cart && cart?.length
                        ? cart.map((productItem) => (
                              <ProductTile
                                  product={productItem}
                                  key={productItem.id}
                              />
                          ))
                        : null}
                </div>
                    <div className="w-[450px] flex justify-center mx-auto ">
                        <div className="flex flex-col justify-center item-end p-5 spacy-5 mt-14 bg-black gap-2">
                                <h1 className="font-bold text-lg text-white text-center">Checkout List</h1>
                                  {cart.map((product,index) => (
                                    <div className="flex justify-between gap-8">
                                    <p className="text-white">
                                    {index+1}.{" "}
                                      {product.title}
                                    </p>
                                    <p className="text-white">
                                      ${product.price}
                                    </p>
                                    </div>
                                  ))}
                                  <hr className=""/>
                                <p className="flex justify-between gap-8">
                                    <span className="text-gray-400 text-bold">Total Amount</span>
                                    <span className="text-white"> ${totalCart} </span>
                                </p>
                                
                                <button className="text-black bg-white p-2 text-xl mt-2" onClick={handleCheckOut}>Click To Checkout</button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="min-h-[80vh] flex flex-col items-center justify-center">
                    <h1 className="text-gray-800 font-bold ">Class is Empty</h1>
                    <Link to="/">
                        <button className="bg-black text-white border-2 rounded-lg font-bold p-4">
                            SHOP NOW
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}
