const add = function (a,b) {
    return a + b;
}

console.log(add(50,50));

const user = {
    name: "James",
    cities: ['Portland', 'Seattle', 'Renton'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
};
console.log(user.printPlacesLived()[1]);

const multiplier = {
    numbers: [3,6,9,12],
    multiplyBy: 3,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
};

console.log(multiplier.multiply())