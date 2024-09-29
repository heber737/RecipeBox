export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      storage &&
      storage.length !== 0
    );
  }
}

export function formatRecipe(string) {
  const arrayFromString = string.split("*").map((item) => {
    const string = item.trim();
    return string;
  });
  return arrayFromString.filter((item) => item !== "");
}
