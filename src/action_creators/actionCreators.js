function eatAcorn(currentNumber) {
  return {
    type: 'EAT_ACORN',
    count: currentNumber
  }
};

function buyAcorn(currentNumber) {
  return {
    type: 'BUY_ACORN',
    count: currentNumber
  }
};

export {
  eatAcorn,
  buyAcorn
}