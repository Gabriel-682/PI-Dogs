const regexIsNumber = /^\d+$/;
const regexUrl =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/;

export default function validation(newDogInput, allDogsNames) {
  let errors = {};

  if (newDogInput.name !== "") {
    let nameSplited = newDogInput.name?.split(" ");
    let nameUpper = nameSplited?.map((name) => {
      return (name =
        name.charAt(0).toUpperCase() + name.substring(1).toLowerCase());
    });
    let nameFixed = nameUpper?.join(" ");

    if (allDogsNames?.includes(nameFixed)) {
      errors.name = `La raza "${nameFixed}" ya existe.`;
    } else {
      errors.name = "";
    }
  } else if (newDogInput.name === "") {
    errors.name = "Debe ingresar un nombre.";
  }

  if (newDogInput.minHeight !== "") {
    !regexIsNumber.test(newDogInput.minHeight) &&
    newDogInput.minHeight !== undefined
      ? (errors.minHeight =
          'La "Altura Mínima" debe se un número entero positivo.')
      : (errors.minHeight = "");
  } else if (newDogInput.minHeight === "") {
    errors.minHeight = 'Debe ingresar una "Altura Mínima".';
  }

  if (newDogInput.maxHeight !== "") {
    !regexIsNumber.test(newDogInput.maxHeight) &&
    newDogInput.maxHeight !== undefined
      ? (errors.maxHeight =
          'La "Altura Máxima" debe se un número entero positivo.')
      : (errors.maxHeight = "");
  } else if (newDogInput.maxHeight === "") {
    errors.maxHeight = 'Debe ingresar una "Altura Máxima".';
  }

  if (Number(newDogInput.maxHeight) < Number(newDogInput.minHeight))
    errors.maxHeight =
      'La "Altura Máxima" debe ser mayor a la "Altura Mínima".';

  if (newDogInput.minWeight !== "") {
    !regexIsNumber.test(newDogInput.minWeight) &&
    newDogInput.minWeight !== undefined
      ? (errors.minWeight =
          'El "Peso Mínimo" debe se un número entero positivo.')
      : (errors.minWeight = "");
  } else {
    errors.minWeight = 'Debe ingresar un "Peso Mínimo".';
  }

  if (newDogInput.maxWeight !== "") {
    !regexIsNumber.test(newDogInput.maxWeight) &&
    newDogInput.maxWeight !== undefined
      ? (errors.maxWeight =
          'El "Peso Máximo" debe se un número entero positivo.')
      : (errors.maxWeight = "");
  } else {
    errors.maxWeight = 'Debe ingresar un "Peso Máximo".';
  }

  if (Number(newDogInput.maxWeight) < Number(newDogInput.minWeight))
    errors.maxWeight = 'El "Peso Máximo" debe ser mayor al "Peso Mínimo".';

  if (newDogInput.minLife_span !== "") {
    !regexIsNumber.test(newDogInput.minLife_span) &&
    newDogInput.minLife_span !== undefined
      ? (errors.minLife_span = 'El "Mínimo" debe se un número entero positivo.')
      : (errors.minLife_span = "");
  } else {
    errors.minLife_span = 'Debe ingresar un "Mínimo".';
  }

  if (newDogInput.maxLife_span !== "") {
    !regexIsNumber.test(newDogInput.maxLife_span) &&
    newDogInput.maxLife_span !== undefined
      ? (errors.maxLife_span = 'El "Máximo" debe se un número entero positivo.')
      : (errors.maxLife_span = "");
  } else {
    errors.maxLife_span = 'Debe ingresar un "Máximo".';
  }

  if (Number(newDogInput.maxLife_span) < Number(newDogInput.minLife_span))
    errors.maxLife_span = 'El "Máximo" debe ser mayor al "Mínimo".';

  if (newDogInput.image !== "") {
    !regexUrl.test(newDogInput.image) && newDogInput.image !== undefined
      ? (errors.image = "La dirección ingresada no es una URL.")
      : (errors.image = "");
  }

  if (newDogInput.temperaments.length) {
    errors.temperaments = "";
  } else {
    errors.temperaments = "Debe seleccionar al menos un temperamento.";
  }

  return errors;
}
