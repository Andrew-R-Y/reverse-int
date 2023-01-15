module.exports = function reverse (n) {
  const text = Math.abs(n).toString()
  let result = '';
  let i = 0;
  while (i < text.length) {
    result = text[i] + result
    i++
  }
  return Number(result)
}