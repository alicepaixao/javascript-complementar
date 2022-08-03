// Codar um conversor de temperatura
// Que vai converter Celsius para Fahrenheit e vice-versa
// [ Fórmula : c/5 = (f-32)/9 [ onde c = temperatura em Celsius ef = temperatura em Fahrenheit ]
function converteFahrenheit(celsius) 
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C é ${cToFahr} \xB0F.`;
    console.log(message);
}

function converteCelsius(fahrenheit) 
{
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F é ${fToCel}\xB0C.`; // \xB0 em ascii é a bolinha de grau https://www.codetable.net/hex/b0
    console.log(message);
} 
converteFahrenheit(60);
converteCelsius(45);