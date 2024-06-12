//----------------------string methods in js--------------------------------//
let name= "   vivek  baraiya    "
//charAt() --> return charecter of the specific index
console.log(name.charAt(5));

// index of --> give index of the specific character 

console.log(name.indexOf('v'));

// it return last index of given string
console.log(name.lastIndexOf('v'));

// substring --> form substring from given indexes 

let str =name.substring(3,7);
//console.log(str);

//slice -->extract portion of string 

let str2=name.substring(3,7);
//console.log(str2);
//console.log(name);

// toUppercase() and toLowercase --> this two method return new changed string 

let str3 =str.toUpperCase()
//console.log(str3);
let str4 = name.toLowerCase();
//console.log(str4);


// trim(), trimstart(),trimend(), trimleft() ,trimright()

let str5 =name.trim();
//console.log(str5);
let str6 =name.trimStart();
//console.log(str6);
let str7 =name.trimRight();
//console.log(str7);

// split ---> split values as per the provided argument 

let arr =name.split(" ");
//console.log(arr);

// replace --> replace only first value of the given string 
let str8 =name.replace("v","333");
//console.log(str8);

// includes --> return boolen value if substring is present in the string 
let ispresent = name.includes("vivek")
console.log(ispresent);

//startswith()    endwsith()
let isstart =name.startsWith(" ");
let isend =name.endsWith(" ")
console.log(isstart , isend);

// it repeat a given string what we provide argument in bracket 

let str9 =name.repeat(3);
console.log(str9);



