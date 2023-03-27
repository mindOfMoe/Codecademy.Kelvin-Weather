const kelvin = 293;
// create a constant variable kelvin to 293 degrees for testing purposes.

const celsius = kelvin - 273;
// create a const celsius variable and assign the celsius conversion formula.

let fahrenheit = celsius * (9 / 5) + 32;
// create a reassignable fahrenheit variable and assign the fahreheit conversion formula.

fahrenheit = Math.floor(fahrenheit);
// reassign fahrenheit variable to round down the fahrenheit degrees.

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// using string interpolation, log the The temperature is TEMPERATURE degrees Fahrenheit. replacing TEMPERATURE with the value saved to fahrenheit variable.
