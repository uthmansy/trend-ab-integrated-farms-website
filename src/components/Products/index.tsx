import { INTRO_1, PRODUCT_1 } from "@/constants/IMAGES";
import React from "react";
import Container from "../Container";

interface Product {
  title: string;
  img: string;
  description: string;
}

const products: Product[] = [
  {
    title: "NKP 20:10:10",
    description:
      "Suitable for a variety of crops, including vegetables, fruits, and grains, ensuring a balanced nutrient supply for optimal yield and productivity.",
    img: PRODUCT_1.src,
  },
  {
    title: "NKP 20:10:10+S",
    description:
      "This fertilizer blend provides a balanced supply of essential nutrients, including Nitrogen, Phosphorus, Potassium, and Sulfur (S).",
    img: PRODUCT_1.src,
  },
  {
    title: "NKP 20:10:10",
    description:
      "It promotes healthy growth, strong root systems, and better crop yields. Suitable for a wide range of crops.",
    img: PRODUCT_1.src,
  },
];

function Products() {
  return (
    <section className="relative">
      <img
        src={INTRO_1.src}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ filter: "brightness(35%)" }}
      />
      <div className="relative py-24 md:py-28">
        <Container>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-20">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, index) => (
              <div key={index} className="p-3 flex space-x-5 bg-white">
                <img
                  src={product.img}
                  alt=""
                  className="w-32 object-cover aspect-[2/3]"
                />
                <div className="flex flex-col space-y-3 flex-1 py-10">
                  <h3 className="uppercase tracking-wider font-semibold text-green-800">
                    {product.title}
                  </h3>
                  <p className="text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Products;
