/* eslint-disable react/prop-types */
import { formatRecipe } from "../functions.js";

function RecipeDisplay({
  recipes,
  currentRecipe,
  onModalClick,
  onDeleteRecipe,
  setFormInput,
  setModalType,
}) {
  if (recipes.length > 0) {
    return (
      <div className="bg-inherti mx-auto mt-6 min-h-full max-w-3xl items-start px-6 pb-6 sm:px-8 md:pt-6 lg:bg-amber-100">
        <h1 className="pb-4 text-center text-3xl font-bold md:pb-6">
          {recipes[currentRecipe].name}
        </h1>
        <h2 className="pb-4 text-2xl font-bold">Ingredients</h2>
        <ul className="list-inside list-disc pb-3 tracking-wide">
          {formatRecipe(recipes[currentRecipe].ingredients).map(
            (ingredient, i) => {
              return (
                <li key={"ing" + i} className="mb-3 text-pretty indent-3">
                  {ingredient}
                </li>
              );
            },
          )}
        </ul>
        <h2 className="pb-4 text-2xl font-bold">Steps</h2>
        <ol className="list-inside list-decimal pb-3 leading-relaxed tracking-wide">
          {formatRecipe(recipes[currentRecipe].steps).map((ingredient, i) => {
            return (
              <li key={"ing" + i} className="mb-3 text-pretty indent-4">
                {ingredient}
              </li>
            );
          })}
        </ol>
        <div className="mt-2 flex shrink-0 grow-0 justify-end gap-2">
          <button
            id="edit-btn"
            className="btn basis-16 bg-lime-400 dark:border-none"
            onClick={() => {
              setModalType("edit");
              onModalClick();
              setFormInput({
                name: recipes[currentRecipe]["name"],
                ingredients: recipes[currentRecipe]["ingredients"],
                steps: recipes[currentRecipe]["steps"],
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="rgb(30 41 59)"
            >
              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
            </svg>
          </button>
          <button
            id="delete-button"
            className="btn basis-16 bg-red-400 dark:border-none"
            onClick={() => {
              function getAuth() {
                const response = confirm(
                  "Are you sure you want to delete this recipe definitely?",
                );
                return response;
              }
              onDeleteRecipe(getAuth());
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="rgb(30 41 59)"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <p className="mx-4 mb-40 mt-44 text-center text-3xl">
        Your RecipeBox is empty. Start adding your favorite recipes.
      </p>
    );
  }
}

export default RecipeDisplay;
