import { useState } from "react";
import { Link } from "react-router-dom";
import { burguers, questions } from "../data";
import { BurguerFavourite, BurguerQuiz } from "../components";
import { ContactView } from "../views";

export const SelectBurguerPage = () => {
  const [actuallyQuestion, setActuallyQuestion] = useState(0);
  const [userPreferences, setUserPreferences] = useState([]);
  const [filteredHamburgers, setFilteredHamburgers] = useState(burguers);
  const [burguerPreferView, setBurguerPreferView] = useState(false);

  const handlePreference = (ingredient, likes) => {
    if (likes) {
      setUserPreferences([...userPreferences, ingredient]);
    } else {
      // Filtrar las hamburguesas que no contienen el ingrediente
      const updatedHamburgers = filteredHamburgers.filter(
        (hamburger) => !hamburger.ingredients.includes(ingredient)
      );
      setUserPreferences([...userPreferences, ingredient]);
      setFilteredHamburgers(updatedHamburgers);
    }
    console.log(filteredHamburgers);
    if (
      filteredHamburgers.length <= 1 ||
      actuallyQuestion === questions.length - 1
    )
      setBurguerPreferView(true);
    setActuallyQuestion(actuallyQuestion + 1);
  };

  return (
    <>
      <div className="bg-red-600 min-h-screen">
        <nav>
          <button className="text-lg text-white px-5 py-2 border rounded-xl hover:bg-red-700 hover:scale-105 active:bg-red-400 m-7">
            <Link to="/">Volver</Link>
          </button>
        </nav>
        {burguerPreferView 
        ? <BurguerFavourite filteredHamburgers={filteredHamburgers} />
        : <BurguerQuiz actuallyQuestion={actuallyQuestion} handlePreference={handlePreference}/>
        }
      </div>
      <ContactView />
    </>
  );
};
