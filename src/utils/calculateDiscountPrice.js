export function calculateDiscountPrice(price, discountPercentage) {
  const discountAmount = (price * discountPercentage) / 100;
  return price - discountAmount;
}
