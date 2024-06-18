const stringArr = ["Hello", "how", "are", "you"];
const camelCaseArr = stringArr.map((str, index) => {
  if (index === 0) {
    return str.toLowerCase();
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
});
