import 'https://cdn.form.io/formiojs/formio.full.min.js';

export function newForm(element, jsonContent) {
  Formio.createForm(element, JSON.parse(jsonContent));
  return new Boolean();
}
