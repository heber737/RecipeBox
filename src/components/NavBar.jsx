/* eslint-disable react/prop-types */

function NavBar({
  recipes,
  onRecipeChange,
  onModalClick,
  setFormInput,
  setModalType,
}) {
  return (
    <div className="navbar bg-lime-400 text-slate-800 dark:text-slate-800">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box stable-gutter z-[1] mt-3 max-h-40 min-w-52 max-w-80 flex-nowrap overflow-x-hidden overflow-y-scroll bg-lime-400 p-2 shadow"
          >
            {recipes.length > 0 ? (
              recipes.map((recipe, i) => {
                return (
                  <li key={i}>
                    <button
                      value={i}
                      onClick={(e) => {
                        onRecipeChange(e);
                      }}
                      className="btn btn-sm btn-ghost truncate"
                    >
                      {recipe.name}
                    </button>
                  </li>
                );
              })
            ) : (
              <p className="pl-2 text-center">No recipes available</p>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="text-2xl font-black">RecipeBox</a>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost"
          onClick={() => {
            setModalType("add");
            onModalClick();
            setFormInput({
              name: "",
              ingredients: "",
              steps: "",
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
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
