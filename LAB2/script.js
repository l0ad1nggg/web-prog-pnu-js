import { speakHello } from './speakHello.js';
import { speakGoodBye } from './speakGoodBye.js';

const names = [
  "s1mple",
  "dev1ce",
  "JW",
  "f0rest",
  "cen9",
  "somedieyoung",
  "Edward",
  "Zeus",
  "bondik",
  "b1t",
  "yekindar",
  "NeL1X",
  "l0ad1nggg",
  "npl",
  "guthriee",
  "blameF",
  "Woro2k",
  "naf",
  "kennyS",
  "olofmeister",
  "GeT_RiGhT",
  "Zywoo",
  "FalleN",
  "dupreeh",
  "TaZ",
  "krimz",
  "Fer",
  "Taco",
  "Stewie2k",
  "screaM",
  "Neo",
  "jL",
  "aleksib",
];

console.log("1 rule of fight club: if name starts with J, you should leave.. :/");

for (let i = 0; i < names.length; i++) {
  if (names[i].charAt(0).toLowerCase() === "j") {
    console.log('broski, your name starts with J...');
    speakGoodBye(names[i]);
  } else {
    speakHello(names[i]);
  } 
}

console.log("2 rule of fight club: if name ends with letter k, you should leave.. ");

for (let i = 0; i < names.length; i++) {
  if (names[i].charAt(names[i].length - 1).toLowerCase() === "k") {
    speakGoodBye(names[i]);
  } else {
    speakHello(names[i]);
  } 
}

console.log("3 rule of fight club: if name of ASCII sum is even - hello, you are welcome, else good bye! :/");
for (let i = 0; i < names.length; i++) {
  let sum = 0;
  for (let i = 0; i < names[i].length; i++) {
    sum += names[i].charCodeAt(i);
  }
  if (sum % 2 === 0) {
    speakHello(names[i]);
  } else {
    speakGoodBye(names[i]);
  } 
}


  