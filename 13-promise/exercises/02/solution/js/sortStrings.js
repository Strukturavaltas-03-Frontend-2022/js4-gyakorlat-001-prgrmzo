const sortStrings = (arr) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject(new Error("Error: Something went wrong with sorting words!"));
    }
    arr.forEach((item) => {
      if (typeof item !== "string") {
        reject(new Error("Error: Not all items in the array are strings!"));
      }
    });
    resolve(arr.sort());
  });
};

export default sortStrings;
