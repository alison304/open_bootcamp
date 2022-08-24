// nombre (string)

let name = 'Alison';
console.log(name);

// edad (number)

let age = 29;
console.log(age);

// ¿Eres desarrollador? (boolean)

let developer = true;
console.log(developer);

// fecha de nacimiento (Date)

let dateString = '03/04/1993';
let birthDate = new Date(dateString);
// let birthDateString = birthDate.toLocaleDateString('en-US');

console.log(birthDate);


//  Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
const book = {
    title: "La ciudad y los perros",
    author: "Mario Vargas Llosa",
    date: 1963,
    url: "https://www.abebooks.com/first-edition/Ciudad-perros-Mario-Vargas-Llosa-Seix/30202366376/bd" ,

}

console.log(book);