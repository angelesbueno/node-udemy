const fs = require("fs");

// const crearArchivo = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     try {
//       console.log("====================");
//       console.log(`    TABLA DEL ${base}`);
//       console.log("====================");
//       let salida = "";
//       for (let i = 0; i <= 10; i++) {
//         salida += `${base} x ${i} = ${base * i}\n`;
//       }

//       console.log(salida);

//       let nombreArchivo = `tabla-${base}.txt`;

//       fs.writeFileSync(nombreArchivo, salida);

//       // console.log(`tabla-${base}.txt creado`);

//       resolve(nombreArchivo);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };
const crearArchivo = async (base = 5) => {
  try {
    console.log("====================");
    console.log(`    TABLA DEL ${base}`);
    console.log("====================");
    let salida = "";
    for (let i = 0; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);

    let nombreArchivo = `tabla-${base}.txt`;

    fs.writeFileSync(nombreArchivo, salida);

    return nombreArchivo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
