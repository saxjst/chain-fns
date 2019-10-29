/** Chain a list of handlers with each other
 *
 * @param {Function[]} fns List of handlers to chain
 * @return {Function} First handler chains with the others
 */
const chainFns = fns =>
  fns.reverse().reduce((nextFn, fn) => fn(nextFn), _ => _);

module.exports = chainFns;
