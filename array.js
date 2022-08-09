// (typeof) Use To Know What Types Of Variable It Is except array because in the case of array it doesn't work.
// [Array.isArray()] Use to know is this variable is array or not. We saw previously when we checked out array with the help of (typeof). The result was object. But Indeed It wasn't object. it was an array. we know (typeof) doesn't work for array. so we need to recheck array we need [Array.isArray()].
/* const conuntry = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: 'Agun' };
const friends = [13, 14, 11, 17, 21, 16, 15, 20];

function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof conuntry);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add); */


// [arrayName.includes(search element)] checks the element is present or not in the array. If present then print true. If not present in the array then print false.
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
// console.log(friends.includes(21));

// [arrayName.indexof()] checks the element is present or not in the array.We know if any element have in the array then the value of index won't negative value whether it will be 0 or greater than zero. If condition true then print is present. If If condition not true or false then print is not present in the array.
if (friends.indexOf(19) !== -1) {

}

// [arrayName.concat(search element name)] allows to add one or more array and make them alongside
const newFriendsAge = [12, 13, 11, 13];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);
