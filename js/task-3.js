function getElementWidth(content, padding, border) {
  const numberPaddings = Number.parseFloat(padding) * 2;
  const numberBorders = Number.parseFloat(border) * 2;
  const numberContent = Number.parseFloat(content);

  const result = numberContent + numberPaddings + numberBorders;
  return result;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
