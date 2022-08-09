/*

Problem Requirements:
1.If ticket numbers is less than 100, per ticket price:100
2.If ticket numbers is more than 100, but less than 200. Then first 100 tickets will be 100 and rest of the tickets will be 90 taka per piece
first 100 --> 100tk
rest --> 90tk
3. If you purchase more than 200 tickets
first 100 --> 100tk
101-200 --> 90tk
200+ --> 70tk

*/

function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
    }
}

const totalticketPrice = ticketPrice(120);
console.log('Price:', totalticketPrice);