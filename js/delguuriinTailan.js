const data = [
    {
        productName: "Baawgai",
        unitPrice: 5000,
        amount: 99999,
        totalPrice: 850,
        casherId: 1,
        date: '2022-11-01'
    },
    {
        productName: "Bakery",
        unitPrice: 5000,
        amount: 200,
        totalPrice: 500000,
        casherId: 1,
        date: '2022-11-01'
    },
    {
        productName: "Chocolate",
        unitPrice: 3000,
        amount: 18,
        totalPrice: 500,
        casherId: 1,
        date: '2022-11-01'
    },
    {
        productName: "Candy",
        unitPrice: 5000,
        amount: 200,
        totalPrice: 100000,
        casherId: 1,
        date: '2022-11-01'
    },
    {
        productName: "Milk",
        unitPrice: 3000,
        amount: 18,
        totalPrice: 1000,
        casherId: 1,
        date: '2022-11-01'
    }
];
// console.log(data)

let total = 0;

for (let i = 0; i < data.length; i++) {
    total += data[i].totalPrice;
}console.log(`Total: ${total}`);


const sortedData1 = data.sort(function (a,b){
    if (a.totalPrice > b.totalPrice) {
        return 1;
    }
    else{
        return -1;
    }
}); console.log(sortedData1)

