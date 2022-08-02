export const calculatePrice = (price, long, width) => {
  price = parseInt(price) * ((parseInt(long)/1000) * (parseInt(width)/1000));
  price = price.toFixed(2);
  return price;
}