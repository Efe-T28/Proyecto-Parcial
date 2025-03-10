export const loadState = (llave, dato) => {
  try {
    localStorage.setItem(llave, JSON.stringify(dato));
    console.log("Guardado en LocalStorage");
  } catch (error) {
    console.log("Error al guardar los datos en el local storage", error);
  }
};
