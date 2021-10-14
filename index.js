function receivesAFunction(testCase){
    return testCase();
}

function returnsANamedFunction(){
    return function myNameIs(){
        console.log("Hi, My Name is What?");
    }
}

function returnsAnAnonymousFunction(){    
    return function () {
    console.log("\"Did someon say Anon?\" -Q");
    }}