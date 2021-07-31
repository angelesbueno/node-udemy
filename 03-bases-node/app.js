const fs = require('fs');
console.clear();
const base = 2;
console.log('====================');
console.log(`    TABLA DEL ${base}`);
console.log('====================');
let salida = '';
for (let i = 0; i <= 10; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
}

console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`, salida);

console.log(`tabla-${base}.txt creado`);