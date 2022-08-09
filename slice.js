// Array Slice
// [arrayName.slice(slicing start from array index , up to slicing after index number)] allows an array slicing. here (slicing start from array index) means array will be copy or slice from the array index and (up to slicing after index number) means array will be slice before upto this end index position. When we will slice an array then the main array element quantity won't change. It will be like the first time array length. just declare the element is copied from the main array.
/* const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends.slice(2, 5);
console.log(partial);
console.log(friends); */



// Array Splice: Removes elements from an array and if necessary,insert new elements in their place, also returing the deleted element and will change the original array
// [arrayName.splice(splicing start from array index , quantity or the number of element to remove from the array)]
// [arrayName.splice(splicing start from array index , quantity or the number of element to remove from the array , insertion new value of this array and it will be add where splice or removing other values from this array )]
const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends.splice(2, 3);
console.log(partial);
console.log(friends);
const partial2 = friends.splice(2, 3, 303, 420, 444);
console.log(partial2);
console.log(friends);