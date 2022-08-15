import 'https://cdn.form.io/formiojs/formio.full.min.js';

export function newForm(element, jsonObject) {
  // DEBUG
  // console.log(jsonContent);
  // if we want to parse the JSON in here
  //Formio.createForm(element, JSON.parse(jsonContent));
  
  Formio.createForm(element, jsonObject);
  return new Boolean();
}
