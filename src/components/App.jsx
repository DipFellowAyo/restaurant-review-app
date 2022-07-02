import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import restaurants from "../restaurants";

function App() {
  return (
    <div>
      <Header />
      <figure className="hero">
        <img src={process.env.PUBLIC_URL+"pexels-quark-studio-3201921.jpg"} alt="hero-img" />
        <figcaption className="hero-header">
          <h3>Leave a review for your favorite restaurants</h3>
          <a className="child" href="#ww.signup"><h1 className="Ready">Ready? Sign Up</h1><button className="hero-btn">Here</button></a>
          <p className="child">Already a member? <button className="hero-btn">Log In</button></p>
        </figcaption>
      </figure>
      <section>
          <h6 className="pop-rest">Popular restaurants in your area</h6>
          <hr></hr>
          <dl className="cardSection">
            {restaurants.map(restaurant => (
              <Card 
                key = {restaurant.id}
                img = {restaurant.img}
                name = {restaurant.name}
                rating = {restaurant.rating}
                location = {restaurant.location}  
              />
              )
            )}
          </dl>
      </section>
      <Footer />
    </div>
  );
}

export default App;


