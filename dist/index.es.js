async function n(a, i) {
  for (let t = 0; t < a.length; t++)
    await i(a[t], t, a);
}
const o = () => {
  Array.prototype.awaitEach = n;
};
export {
  n as awaitEach,
  o as install
};
//# sourceMappingURL=index.es.js.map
