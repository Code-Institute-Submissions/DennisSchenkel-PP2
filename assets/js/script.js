console.log("js integration works");

// Import platforms.json
let platforms = import platforms from "../data/platforms.json" assert { type: 'json' };
console.log(platforms);

console.log("end of js integration");
