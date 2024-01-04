// run a loop from 30 to 86 this loop will stop if the values get higher than 44;

for (let i = 30; i <= 86; i++){
    if (i > 44) {
        break;
    }
    // console.log(i);
}

// write the prices of the books that you have display the prices if the prices is lower than 200;
let bookPrices = [223, 234, 167, 453, 123, 167]

for (let i = 0; i < bookPrices.length; i++){
    let bookPrice = bookPrices[i]
    if (bookPrice > 200) {
        continue;
    }
    console.log(bookPrice);
}