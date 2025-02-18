const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman","naagraaj"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[0]);

myArr.push(6); //add 6 to the end of the array
myArr.push(7);//add 7 to the end of the array
myArr.pop(); //removing one value from the last of the array

myArr.unshift(9); //shift the entire array and then add the value 9 at the first place
myArr.shift(); //delete the shifted array by removing the value which have been added at the first place

console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(typeof newArr);

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

