import React, { useEffect, useState } from "react";
import ProductTile from "../components/ProductTile";
import { TailSpin } from "react-loader-spinner";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        const fetchDetail = async () => {
            setLoader(true);
            const res = await fetch("https://dummyjson.com/products");
            const result = await res.json();

            if (result) {
                setLoader(false);
                console.log(result.products);
                setProducts(result.products);
            }
        };
        fetchDetail();
    }, []);
    return (
        <div>
            {loader ? (
                <div className="min-h-screen w-full flex justify-center items-center">
                    <TailSpin
                        visible={true}
                        height="80"
                        width="80"
                        color="#111"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            ) : (
                <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
                    {products && products?.length
                        ? products.map((productItem) => (
                              <ProductTile
                                  product={productItem}
                                  key={productItem.id}
                              />
                          ))
                        : null}
                </div>
            )}
        </div>
    );
};

export default Home;
