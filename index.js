const moreProbability = () => {
  const number = document.getElementById('number').value;
  const numberMultiplicated = numberMul(number);
  const numberPlus = numberMultiplicated + numberMultiplicated;

  let result = document.getElementById('result');
  result.innerHTML = numberMultiplicated / numberPlus;
};

// const lessProbability = (number) => {
//   const numberMultiplicated = numberMul(number);
//   const numberLess = numberMultiplicated - numberMultiplicated;
//   return numberMultiplicated / numberLess;
// };

const numberMul = (number) => 0.5 * number;
