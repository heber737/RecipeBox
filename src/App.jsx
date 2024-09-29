import {
  useState,
  useEffect,
  useRef
} from "react";

import initialRecipes from "./initial-recipes.js";
import { storageAvailable } from "./functions.js"
import "./App.css";

// COMPONENTS

import NavBar from "./components/NavBar.jsx";
import RecipeDisplay from "./components/RecipeDisplay.jsx";
import RecipeModal from "./components/RecipeModal.jsx";

// LOCAL STORAGE AVAILABILITY TEST

if (
  storageAvailable("localStorage") &&
  !localStorage.getItem("storedRecipes")
) {
  localStorage.setItem("storedRecipes", JSON.stringify(initialRecipes));
}

// APP

function App() {
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem("storedRecipes")),
  );
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [formInput, setFormInput] = useState({
    name: "",
    ingredients: "",
    steps: "",
  });
  const [modalType, setModalType] = useState("");

  const modalButton = useRef(null);

  function handleRecipeChange(event) {
    setCurrentRecipe(event.target.value);
  }

  function handleAddRecipe() {
    setRecipes([...recipes, formInput]);
    setCurrentRecipe(recipes.length);
  }

  function handleEditRecipe() {
    setRecipes((prev) => {
      return prev.toSpliced(currentRecipe, 1, formInput);
    });
  }

  function handleDeleteRecipe(allow) {
    if (allow) {
      setRecipes((prev) => {
        return prev.toSpliced(currentRecipe, 1);
      });
      if (currentRecipe == 0) {
        setCurrentRecipe(0);
      } else {
        setCurrentRecipe(currentRecipe - 1);
      }
    }
  }

  function handleModalClick() {
    modalButton.current.click();
  }

  useEffect(() => {
    localStorage.setItem("storedRecipes", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <div className="min-h-screen w-full bg-amber-50 dark:text-slate-800">
      <NavBar
        recipes={recipes}
        onRecipeChange={handleRecipeChange}
        formInput={formInput}
        onModalClick={handleModalClick}
        setFormInput={setFormInput}
        setModalType={setModalType}
      />
      <RecipeDisplay
        recipes={recipes}
        currentRecipe={currentRecipe}
        onModalClick={handleModalClick}
        onDeleteRecipe={handleDeleteRecipe}
        setFormInput={setFormInput}
        setModalType={setModalType}
      />
      <RecipeModal
        onAddRecipe={handleAddRecipe}
        onEditRecipe={handleEditRecipe}
        formInput={formInput}
        setFormInput={setFormInput}
        modalType={modalType}
        ref={modalButton}
      />
      <p className="pb-8 text-center font-bold">Created by Heber Villalobos</p>
    </div>
  );
}

export default App;
