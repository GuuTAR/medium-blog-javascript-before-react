const target = 7

for(let i=1; i<=10; i++) {
    for(let j=1; j<=10; j++) {
        if (i+j === target) {
            console.log(i, j)
        }
    }
}

console.log('-----')

for(let i=1; i<=10; i++) {
    for(let j=i+1; j<=10; j++) {
        if (i+j === target) {
            console.log(i, j)
        }
    }
}