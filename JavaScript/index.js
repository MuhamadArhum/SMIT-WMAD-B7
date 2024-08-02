

// 
let prom = new Promise ((resolve, reject) => {
    resolve("Start Counting")
});

function counter(value){
    console.log(value);
}

prom
    .then((res) => {
        counter(res)
        return "One"
    });