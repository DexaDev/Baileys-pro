//=======================================================/
const teks = `chalk.hex('#d7a1ff').italic('     T H A N K S   F O R   U S I N G\n') +
  chalk.hex('#a78bfa').italic('           M Y   B A I L E Y S 🍀\n\n') +
  chalk.hex('#89CFF0').italic('     last updated • 24 February 2026\n') +
  chalk.hex('#c084fc').italic('     Modification by @luismaestro\n') +
  chalk.hex('#a78bfa').italic('           telegram: @luismaestro\n\n') +
  chalk.hex('#d7a1ff').italic('          ⋆ ˚ ✧ ₊ ˚ ෆ\n')`
console.log(teks)

import makeWASocket from "./Socket/index.js";
//=======================================================//
export * from "./Defaults/index.js";
export * from "./WABinary/index.js";
export * from "../WAProto/index.js";
export * from "./WAUSync/index.js";
export * from "./Store/index.js";
export * from "./Utils/index.js";
export * from "./Types/index.js";
export * from "./WAM/index.js";
//=======================================================//
export { makeWASocket };
export default makeWASocket;
//=======================================================//
