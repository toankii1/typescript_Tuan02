function throwErrorAsync(): Promise<void>{
    return new Promise((_, reject)=>{
        setTimeout(()=>{
            reject("something went wrong");
        }, 1000);
    })
}

throwErrorAsync().catch(error=>{
    console.log(error);
    
})