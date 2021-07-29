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

export const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

export const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime < 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};
