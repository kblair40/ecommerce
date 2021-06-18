export const setMenuOrder = (qty) => {
  const qtyOptions = [1, 2, 3, 4, 5];
  if (!qtyOptions.includes(qty)) {
    qtyOptions.push(qty);
  }
  const chosenQtyIndex = qtyOptions.indexOf(qty);
  qtyOptions.splice(chosenQtyIndex, 1);
  qtyOptions.unshift(qty);
  console.log("qty options:", qtyOptions, "\n\n");
  return qtyOptions;
};
