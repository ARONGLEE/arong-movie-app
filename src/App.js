import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
{ 
  id:1,
	name: "김치",
	image: "https://image.shutterstock.com/image-photo/korea-food-top-view-chinese-600w-1755822044.jpg",
  rating: 5
}, 
{ 
  id:2,
	name: "불고기",
	image: "https://image.shutterstock.com/image-photo/homemade-barbecue-korean-beef-bulgogi-600w-1037107192.jpg",
  rating: 4.5
}, { 
  id:3,
	name: "햄버거",
	image: "https://image.shutterstock.com/image-photo/fresh-tasty-burger-isolated-on-600w-705104968.jpg",
  rating: 4.1
}]

function Food({ name, picture, rating }){ 
  return <div>
			<h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
			<img src = {picture} alt={name} /> 
		</div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
    ))}
    </div>
  );
}

export default App;
