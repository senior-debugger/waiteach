async function a(i, t) {
  for (let n = 0; n < i.length; n++)
    await t(i[n], n, i);
}
const o = () => {
  Array.prototype.waitEach = async function(i) {
    for (let t = 0; t < this.length; t++)
      await i(this[t], t, this);
  };
};
export {
  o as install,
  a as waitEach
};
//# sourceMappingURL=index.es.js.map
