import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg" alt=""
                />
            </div>

            <div className="home__row">
                <Product
                    id="1000321"
                    title="Xbox Series X - The new method to play games with up to 120Hz"
                    price={499}
                    image="https://i.gadgets360cdn.com/products/large/xbox-series-x-db-1252x800-1576214218.jpg?downsize=*:180&output-quality=80"
                    rating={5}
                />
                <Product
                    id="1000322"
                    title="D-Link AC3000 High-Power Wi-Fi Tri-Band Router with Voice Control with Amazon Alexa or Google Assistant, Wi-Fi Mesh"
                    price={149.99}
                    image="https://www.thesource.ca/medias/20191204093714-108083223-EN-G.jpg-mediaConversion-640-x-480-mediaConversion-400-x-300-0?context=bWFzdGVyfGltYWdlc3wxMDA1MDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDI3L2g2Mi85MjA3NzQzMDIxMDg2LmpwZ3w2ODRmMWZlMmU1NDRjNGYzNjExODJkOTJlNmU3YzlhYmI5NTg0MzE3ZjQwNGZiZWY5OGQ1MzAxZGI5ZmJkNWZh"
                    rating={3}
                />

            </div>

            <div className="home__row">
                <Product
                    id="1000323"
                    title="Sonos Playbar, the mountable soundbar for TV, movies, music, and more"
                    price={749}
                    image="https://azcd.harveynorman.com.au/media/catalog/product/9/_/9_162.jpg"
                    rating={4}
                />
                <Product
                    id="1000324"
                    title="Nest Learning Thermostat, 3rd Generation (Works with Amazon Alexa)"
                    price={329}
                    image="https://images-na.ssl-images-amazon.com/images/I/61aDbihRmtL._AC_SL1000_.jpg"
                    rating={5}
                />
                <Product
                    id="1000325"
                    title="AirPods with Charging Case"
                    price={219}
                    image="data:image/jpeg;base64,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"
                    rating={5}
                />

            </div>

            <div className="home__row">
                <Product
                    id="1000326"
                    title="2160p (4K) resolution with HDR OLED TV: Perfect black — each individual pixel can turn on/off Smart TV, webOS, LG ThinQ AI OLED Motion Pro. "
                    price={1600}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401851cv14d.jpg"
                    rating={5}
                />
            </div>

        </div>
    )
}

export default Home;