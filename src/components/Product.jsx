import React from "react";

function Product({ id, title, image, price, rating }) {
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
            <button>Add to Basket</button>
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