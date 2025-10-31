async function o(i, n) {
  for (let t = 0; t < i.length; t++)
    await n(i[t], t, i);
}
const a = () => {
  Array.prototype.waitEach = o;
};
export {
  a as install,
  o as waitEach
};
//# sourceMappingURL=index.es.js.map
