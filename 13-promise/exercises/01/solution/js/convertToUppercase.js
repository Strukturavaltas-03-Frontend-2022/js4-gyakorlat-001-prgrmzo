const convertToUppercase = (arr) => {
  return new Promise((resolve, reject) => {
    let uppercaseArr = [];
    arr.forEach((item) => {
      if (typeof item === "string") {
        uppercaseArr.push(item.toLocaleUpperCase());
      } else {
        reject(new Error("Error: Not all items in the array are strings!"));
      }
    });
    resolve(uppercaseArr);
  });
};

export default convertToUppercase;
