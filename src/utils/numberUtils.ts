type ValueFunction = () => number

export function add (x: number | ValueFunction, y: number | ValueFunction) {
  if (typeof x === 'function') {
    x = x()
  }

  if (typeof y === 'function') {
    y = y()
  }
  return x + y
}
