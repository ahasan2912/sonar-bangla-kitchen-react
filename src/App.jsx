import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import Cards from "./Components/Cards/Cards"
import Navbar from "./Components/Navbar/Navbar"
import Recipes from "./Components/Recipes/Recipes"
import Sidebar from "./Components/Sidebar/Sidebar"

function App() {
  const [cards, setCards] = useState([]);
  const [preparing, setPreparing] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleCookButton = (card) => {
    const newcard = cards.find((item) => item.recipe_id === card.recipe_id);
    if (newcard) {
      alert("Already Exist");
    }
    else {
      setCards([...cards, card]);
    }
  }

  const handlePreparingBtn = (id) => {
    const deleteInfo = cards.find(item => item.recipe_id === id);
    setPreparing([...preparing, deleteInfo])
    const remaingdata = cards.filter(card => card.recipe_id !== id);
    setCards(remaingdata);
  }

  const CalculateTimeAndCalo = ((time, calo) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calo);
  })

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>
      <div className="lg:max-w-7xl mx-auto lg:flex justify-between items-start px-5 lg:mt-14 gap-10">
        <Cards handleCookButton={handleCookButton}></Cards>
        <Sidebar
          cards={cards}
          handlePreparingBtn={handlePreparingBtn}
          preparing={preparing}
          CalculateTimeAndCalo={CalculateTimeAndCalo}
          totalTime ={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </div>
    </>
  )
}

export default App
