import React from "react"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import "./Subtotal.css";
// 1 - importing the useHistory
import { useHistory } from "react-router-dom";

function Subtotal() {

    //2 - Creating the payment process with history variable
    const history = useHistory();

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):  <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            {/* 3 - Making that history bring the payment page */}
            <button onClick={e => history.push("/payment")}>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
