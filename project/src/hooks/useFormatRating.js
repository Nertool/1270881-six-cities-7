export default function useFormatRating(value) {
  return Math.round(value) * 100 / 5;
}
