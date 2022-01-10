import React from 'react'
import ProductItem from '../conponents/ProductItem';

const MOCK_DATA_PRODUCTS = [
    {
        id: 1,
        title: "ASOS DESIGN straight leg jeans in tinted mid wash",
        size: ["S","M","L","XL"],
        inStock: true,
        price: 43,
        image: "http://images.asos-media.com/products/asos-design-straight-leg-jeans-in-tinted-mid-wash/200826668-1-midwashblue"
    },
    {
        id: 2,
        title: "Asics Trail Gel Venture 8 sneakers in black and white",
        size: ["7","7.5","8","8.5","9","9.5","10","10.5","11","12","13","14"],
        inStock: true,
        price: 103,
        image: "http://images.asos-media.com/products/asics-trail-gel-venture-8-sneakers-in-black-and-white/22027051-1-black"
    },
    {
        id: 3,
        title: "ASOS DESIGN baggy jeans in red",
        size: ["S","M","L","XL"],
        inStock: true,
        price: 45,
        image: "http://images.asos-media.com/products/asos-design-baggy-jeans-in-red/200290256-1-red"
    },
    {
        id: 4,
        title: "ASOS DESIGN baseball cap with NASA badges in black",
        size: [],
        inStock: true,
        price: 100,
        image: "http://images.asos-media.com/products/asos-design-baseball-cap-with-nasa-badges-in-black/201071107-1-black"
    },
    {
        id: 5,
        title: "Tommy Hilfiger stainless steel pendant in silver 2790351",
        size: [],
        inStock: true,
        price: 87,
        image: "http://images.asos-media.com/products/tommy-hilfiger-stainless-steel-pendant-in-silver-2790351/200968376-1-silver"
    },
    {
        id: 6,
        title: "Levi's square suede mix sneakers with red tab in cream mix",
        size: ["7","7.5","8","8.5","9","9.5","10","10.5","11","12","13","14"],
        inStock: true,
        price: 103,
        image: "http://images.asos-media.com/products/levis-square-suede-mix-sneakers-with-red-tab-in-cream-mix/200955765-1-beige"
    },
    {
        id: 7,
        title: "Topman essential spray on jeans in mid wash",
        size: ["S","M","L","XL"],
        inStock: true,
        price: 55.5,
        image: "http://images.asos-media.com/products/topman-essential-spray-on-jeans-in-mid-wash/200603575-1-midwashblue"
    },
    {
        id: 8,
        title: "Armani Exchnage J13 slim fit jeans in dark wash",
        size: ["S","M","L","XL"],
        inStock: true,
        price: 100,
        image: "http://images.asos-media.com/products/armani-exchnage-j13-slim-fit-jeans-in-dark-wash/200913411-1-blue"
    },
    {
        id: 9,
        title: "River Island suede mules in gray",
        size: ["7","7.5","8","8.5","9","9.5","10","10.5","11","12","13","14"],
        inStock: true,
        price: 70,
        image: "http://images.asos-media.com/products/river-island-suede-mules-in-gray/201367519-1-grey"
    },
    {
        id: 10,
        title: "HUGO 338 relaxed crop jeans in mid wash",
        size: ["S","M","L","XL"],
        inStock: true,
        price: 148,
        image: "http://images.asos-media.com/products/hugo-338-relaxed-crop-jeans-in-mid-wash/200514997-1-navy"
    },
    {
        id: 11,
        title: "ASOS DESIGN organic cotton blend relaxed tapered jeans in mid blue",
        size: ["S","M","L","XL"],
        inStock: true,
        price: 43,
        image: "http://images.asos-media.com/products/asos-design-organic-cotton-blend-relaxed-tapered-jeans-in-mid-blue/200895882-1-midwashblue"
    },
    {
        id: 12,
        title: "Boss Titanium sneakers in white",
        size: ["7","7.5","8","8.5","9","9.5","10","10.5","11","12","13","14"],
        inStock: true,
        price: 299,
        image: "http://images.asos-media.com/products/boss-titanium-sneakers-in-white/201562587-1-white"
    }
]

function Products() {

    const data = MOCK_DATA_PRODUCTS
    // const [data, setData] = useState(MOCK_DATA_PRODUCTS)

    return (
        <div>
            <div className="text-5xl text-center mt-4">Products</div>
            <div className="flex flex-col items-center m-2">
                {data && data.map(item => <ProductItem product={item} key={item.id}/>)}
            </div>
        </div>
    )
}

export default Products;