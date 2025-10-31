"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});async function n(i,t){for(let a=0;a<i.length;a++)await t(i[a],a,i)}const e=()=>{Array.prototype.waitEach=async function(i){for(let t=0;t<this.length;t++)await i(this[t],t,this)}};exports.install=e;exports.waitEach=n;
//# sourceMappingURL=index.cjs.js.map
