/* Problem Requirements:

Suppose you wanna buy a phone And your budget is tight.
Find out the cheapest phone in your market.

*/

const phones = [
    { name: 'Samsung', camera: '12MP', storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: '12MP', storage: '32gb', price: 22000, color: 'black' },
    { name: 'Iphone', camera: '10MP', storage: '32gb', price: 82000, color: 'silver' },
    { name: 'Xaomi', camera: '13MP', storage: '64gb', price: 52000, color: 'black' },
    { name: 'Oppo', camera: '12MP', storage: '32gb', price: 20000, color: 'golden' },
    { name: 'Nokia', camera: '15MP', storage: '32gb', price: 44000, color: 'black' },
    { name: 'HTC', camera: '10MP', storage: '64gb', price: 62000, color: 'silver' }
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);