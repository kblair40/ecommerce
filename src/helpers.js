export const setMenuOrder = (qty) => {
  const qtyOptions = [1, 2, 3, 4, 5];
  if (!qtyOptions.includes(qty)) {
    qtyOptions.push(qty);
  }
  const chosenQtyIndex = qtyOptions.indexOf(qty);
  qtyOptions.splice(chosenQtyIndex, 1);
  qtyOptions.unshift(qty);

  return qtyOptions;
};

// export const passwordsDoMatch = (pwd1, pwd2) => {
//   return null
// }
