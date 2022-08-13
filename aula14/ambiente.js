// comando de repeticao for

console.log("*** TABUADA ***");
for(let i = 1; i<=10; i++){
    for(let j = 1; j<=10; j++){
        let res = i * j;
        console.log(`${i} x ${j} = ${res}`);
    }
    console.log("\n");
}