let validator1 = true;
let validator2 = true;
let resultingArray =[];
let err ;
let Error = [];
let errS ;
let finalValidator = true ;
function graphSub(lines,maxRange,{ColumsNames :Names},{Values: value}) {
    
    let n1 = lines;
    let marks = value;
    let sub = Names;
    sub = sub.split(",");
    marks = marks.split(",")
    n1 = Number(n1);
    const gArray = [];
    for (let i = 0; i < n1; i++) {
        gArray.push(i);
    }
    Validator (gArray,sub,marks);

    if (validator1 === true && validator2 === true) {
    gArray.forEach((value,i)=>{
        let subject = sub[i];
        let mark = ((Number(marks[i]))/maxRange)*100;
        if (mark > maxRange) {
            mark = `X - check error`;
            err = Number(i+1);
        }
        if (subject === null || subject === "" ){
            subject = "S - check error";
            errS = Number(i+1);
        }
        const infoArray = {Column :subject,valuePercentage : mark };
        resultingArray.push(infoArray);

        if (mark === "X - check error") {
            Error.push({ValueError:"Hey There is a error . Please know that (given range > max Range) is not valid , check error = "+ err}) ;
            finalValidator = false;
            mark = 0
        }
        if (subject === "S - check error") {
            Error.push({NamingError:"can't find column name check error = "+ errS });  
            finalValidator = false;
            subject = "nothing";
        }
        
    })

        if (finalValidator) {
            const Array = resultingArray;
            resultingArray = [];
            return Array;
        }
        else {
        const Err = Error;
        Error = []    
        return Err ;
        }
        
   
   
    
    }
    
    else {
        return console.log("validation failed");
    }
   







}



function Validator (gArray,sub,marks) {
    if (gArray.length !== sub.length ) {
    validator1 = false;
    return   console.log("Please provide name for each columns");
    
    }
    else if (gArray.length !== marks.length) {
       validator2 = false;
        return console.log("Please provide value for each columns");
    }
    else if (gArray.length === sub.length && gArray.length === marks.length ) {
        validator1 = true;
        validator2 = true ;
    }
}


const Graph = graphSub;

module.exports = Graph ;