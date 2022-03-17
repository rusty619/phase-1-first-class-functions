function receivesAFunction(callback){
    return callback()
}

function a(){
    console.log("a")
}

function returnsANamedFunction(){
    return a;
}

function returnsAnAnonymousFunction(){
    return ()=>{

    }
}