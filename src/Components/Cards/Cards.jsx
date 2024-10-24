import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleCookButton}) => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('foods.json')
        .then(res=>res.json())
        .then(data=>setCards(data));
    },[]);

    return (
        <div className="md:w-2/3 grid sm:grid-cols-2 gap-5">
            {
                cards.map((card, idx) => <Card 
                key={idx} card={card}
                handleCookButton={handleCookButton}
                ></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    handleCookButton: PropTypes.func.isRequired
}
export default Cards;