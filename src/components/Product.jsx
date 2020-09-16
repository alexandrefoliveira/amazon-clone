import React from "react";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {

    // Adding products on the basket
    const [basket, dispatch] = useStateValue();

    console.log("this is the basket >>>", basket);

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span role="img" aria-label="star">🌟</span>
                        ))}
                </div>
            </div>
            <img src={image}
                alt="xbox" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}


// I can do this way or the way above!
// function Product(props) {
//     return (
//         <div className="product">
//             <div className="product__info">
//                 <p>{props.title}</p>
//                 <p className="product__price">
//                     <small>$</small>
//                     <strong>{props.price}</strong>
//                 </p>
//                 <div className="product__rating">
//                     <span>{props.rating}</span>
//                 </div>
//             </div>
//             <img src={props.image}
//                 alt="xbox" />
//             <button>Add to Basket</button>
//         </div>
//     )
// }

export default Product;