// src/app/components/ProductCard.tsx
import Product from "./Product";
import {ProductData} from "@/app/components/products.types";

const productsData: ProductData[] = [
    {
        productImage: "/product1.svg",
        saleImage: "/sale.svg",
        likeIcon: "/like.svg",
        basketIcon: "/basket.svg",
        eyeIcon: "/eye.svg",
        linkText: "Books Library",
        ratingImage: "/rating.svg",
        title: "Our Experts Teacher",
        description: "We focus on ergonomics and meeting you....",
        downloadTop: "/download.svg",
        downloadBottom: "/download2.svg",
        h6Text: "15 Sales",
        priceOld: "$16.48",
        priceNew: "$6.48",
        buttonText: "Learn More",
    },
    {
        productImage: "/product2.svg",
        saleImage: "/sale.svg",
        likeIcon: "/like.svg",
        basketIcon: "/basket.svg",
        eyeIcon: "/eye.svg",
        linkText: "Digital Library",
        ratingImage: "/rating.svg",
        title: "Advanced Course",
        description: "Watch our Courses",
        downloadTop: "/download.svg",
        downloadBottom: "/download2.svg",
        h6Text: "20 Sales",
        priceOld: "$18.00",
        priceNew: "$9.99",
        buttonText: "Learn More",
    },
    {
        productImage: "/product3.svg",
        saleImage: "/sale.svg",
        likeIcon: "/like.svg",
        basketIcon: "/basket.svg",
        eyeIcon: "/eye.svg",
        linkText: "Audio Books",
        ratingImage: "/rating.svg",
        title: "Master Class",
        description: "Deep dive into new subjects...",
        downloadTop: "/download.svg",
        downloadBottom: "/download2.svg",
        h6Text: "25 Sales",
        priceOld: "$20.00",
        priceNew: "$12.00",
        buttonText: "Learn More",
    },
    {
        productImage: "/product4.svg",
        saleImage: "/sale.svg",
        likeIcon: "/like.svg",
        basketIcon: "/basket.svg",
        eyeIcon: "/eye.svg",
        linkText: "Video Library",
        ratingImage: "/rating.svg",
        title: "Creative Workshop",
        description: "Get Quality Education",
        downloadTop: "/download.svg",
        downloadBottom: "/download2.svg",
        h6Text: "30 Sales",
        priceOld: "$22.00",
        priceNew: "$14.50",
        buttonText: "Learn More",
    },
];

export default function ProductCard() {
    return (
        <div className="flex flex-wrap justify-between gap-3 max-w-[1046px] mx-auto">
            {productsData.map((product, index) => (
                <div key={index} className="flex-1 min-w-[238px]">
                    <Product {...product} />
                </div>
            ))}
        </div>
    );
}
