export const isNumber = value => {
  const pattern = /[^0-9]/g;
  const result = value.match(pattern);
  if (result !== null){
    return false;
  } else {
    return true;
  }
}