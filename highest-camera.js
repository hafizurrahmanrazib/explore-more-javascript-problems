/* Problem Requirements:

Suppose you wanna buy a phone And You are highly interested to take high MegaPixel Camera Phone.
Find out the high MegaPixel Camera phone in your market.

*/

const phones = [
    { name: 'Samsung', camera: 15, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 13, storage: '32gb', price: 22000, color: 'black' },
    { name: 'Iphone', camera: 20, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'Xaomi', camera: 65, storage: '64gb', price: 52000, color: 'black' },
    { name: 'Oppo', camera: 8, storage: '32gb', price: 20000, color: 'golden' },
    { name: 'Nokia', camera: 25, storage: '32gb', price: 44000, color: 'black' },
    { name: 'HTC', camera: 30, storage: '64gb', price: 62000, color: 'silver' }
];

function highestCameraPhone(phones) {
    let highest = phones[0];
    for (i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.camera > highest.camera) {
            highest = phone;
        }
    }
    return highest;
}

const mySelection = highestCameraPhone(phones);
console.log(mySelection);