// Los múltiplos de 3 imprimir fizz
// Los múltiplos de 5 imprimir buzz
// Los múltiplos de 3y de 5 imprimir fizz-buzz

for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} fizz-buzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if (i % 3 === 0) {
        console.log(`${i} buzz`);
    }
}