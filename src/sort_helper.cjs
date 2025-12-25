const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'config.js');
let content = fs.readFileSync(configPath, 'utf8');

const regex = /parshwanath108Names:\s*\[([\s\S]*?)\]/;
const match = content.match(regex);
if (!match) { console.error('Array not found'); process.exit(1); }

let arrayStr = match[1];
// Simple-clean the string to ensure valid JS for eval (remove comments if any, though none expected in array body)
const array = eval(`[${arrayStr}]`);

const topNames = ['Shankheshwar', 'Antriksh', 'Chintamani'];
const topItems = []; // Indices 0, 1, 2
const otherItems = [];

array.forEach(item => {
    const name = item.english;
    if (name === 'Shankheshwar') topItems[0] = item;
    else if (name === 'Antriksh') topItems[1] = item;
    else if (name === 'Chintamani') topItems[2] = item;
    else otherItems.push(item);
});

otherItems.sort((a, b) => a.english.localeCompare(b.english));

const finalArray = [...topItems.filter(x => x), ...otherItems];

const newArrayStr = '[\n' + finalArray.map(item => {
    return `    { hindi: "${item.hindi}", english: "${item.english}", gujarati: "${item.gujarati}" }`;
}).join(',\n') + '\n  ]';

const result = content.replace(match[0], `parshwanath108Names: ${newArrayStr}`);
fs.writeFileSync(configPath, result, 'utf8');
console.log('Done');
