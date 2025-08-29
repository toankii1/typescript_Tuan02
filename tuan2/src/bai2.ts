function getNumberAsync(): Promise<number>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10);
            
        }, 1000)
    })
}

getNumberAsync().then(result=>{
    console.log(result);
    
})