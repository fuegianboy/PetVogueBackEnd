
//valida que el nombre solo tenga letras numeros y espacios. min 3, max 35
function validateName(name) {

  if (!name.trim()) {
    return false;
  }
  const regex = /^[a-zA-Z0-9\s]{3,35}$/;
  return regex.test(name);
  }
// valida el tipo para que solo permita esas opciones  y que no este vacio
function validateType(type) {
  if (!type.trim()) {
    return false;
  }
  const regex = /^(Juguete|Accesorio|Alimento|Medicamento)$/;
  return regex.test(type);
}
// valida que la descripcion tenga al menos diez letras y no este vacia
function validateDescription(description) {
  if (!description.trim()) {
    return false;
  }
  const regex = /^(?=.*[a-zA-Z0-9\s])[\w\d\s]{10,}$/;
  return regex.test(description);
}
//valida la imagen si cumple con el formato o no
function validateImageLink(image) {
  const regex = /^(https?|ftp):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/i;
  return regex.test(image);
}
//valida que solo se permitan numeros y puntos
function validatePrice(price) {
  const regex = /^(?=.*\d)\d*(?:\.\d{1,2})?$/;
  return regex.test(price);
}
// valida que solo se permitan numeros
function validateStock(stock) {
  const regex = /^\d+$/;
  return regex.test(stock);
}





  
  module.exports = {
    validateName,
    validateType,
    validateDescription,
    validateImageLink,
    validatePrice,
    validateStock,
    
  };
  