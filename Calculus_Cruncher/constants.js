const FLASHCARD_DECKS = [{
  title: 'Differentiation Rules',
  words: {
    // 'key': 'value',
    'Constant Rule': "ƒ(x) = c, ƒ'(x) = 0",
    'Power Rule': 'xⁿ = xnⁿ⁻¹',
    "Sum Rule": "ƒ(x) + g(x) = ƒ'(x) + g'(x)",
    'Product Rule': 'y = ƒ(x) × g(x)',
    'Quotient Rule': 'y = ƒ(x) ÷ g(x)',
    'Chain Rule': "ƒ(g(x)) = ƒ'(g(x))g'(x)",
    'Implicit Differentiation': 'ƒ(x) = ƒ(x, y)'
  }
}, {
  title: 'Common Trig-Derivatives',
  words: {
    'sin(x)': 'cos(x)',
    'cos(x)': '-sin(x)',
    'tan(x)': 'sec²(x)',
    'sec(x)': 'tan(x)sec(x)',
    'csc(x)': '-csc(x)cot(x)',
    'cot(x)': '-csc²(x)'
  }
}, {
  title: 'Common Special Derivates',
  words: {
    'ln|x|': '1 ÷ x',
    'eˣ': 'eˣ',
    'aˣ': 'aˣln(a)',
    'logₐ(x)': '1 ÷ (xln(a))'
  }
}, {
  title: 'Inverse Trig-Derivatives',
  words: {
    'sin⁻¹': '1 ÷ √(1-x²)',
    'cos⁻¹': '-1 ÷ √(1-x²)',
    'tan⁻¹': '1 ÷ (1+x²)',
    'sec⁻¹': '1 ÷ (|x|√(x²-1))',
    'csc⁻¹': '-1 ÷ (|x|√(x²-1))',
    'cot⁻¹': '-1 ÷ (1+x²)'
  }
}, {
  title: 'Filler',
  words: {
    'example': 'apple',
    'example': 'bread',
    'example': 'cheese',
    'example': 'milk',
    'example': 'coffee',
    'example': 'banana',
    'example': 'peach'
  }
}];



