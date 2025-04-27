let validator1 = true;
let validator2 = true;
let resultingArray =[];
let err ;
let Error = [];
let errS ;
let finalValidator = true ;
function graphSub(lines,TotalMarks,{subjectArray:SubjectNames},{Marks:marksNumber}) {
    
    let n1 = lines;
    let marks = marksNumber;
    let sub = SubjectNames;
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
        let mark = ((Number(marks[i]))/TotalMarks)*100;
        if (mark > TotalMarks) {
            mark = `X - check error`;
            err = Number(i+1);
        }
        if (subject === null || subject === "" ){
            subject = "S - check error";
            errS = Number(i+1);
        }
        const infoArray = {subject,markPercentage : mark };
        resultingArray.push(infoArray);

        if (mark === "X - check error") {
            Error.push({NumberError:"Hey There is a error . Please know that (given Mark > Total Mark) is not valid , check correct number = "+ err}) ;
            finalValidator = false;
            mark = 0
        }
        if (subject === "S - check error") {
            Error.push({SubjectError:"can't find subject name check error = "+ errS });  
            finalValidator = false;
            subject = "nothing";
        }
        
    })

        if (finalValidator) {
            return resultingArray;
        }
        else {
        return Error ;
        }
        
   
   
    
    }
    
    else {
        return console.log("validation failed");
    }
   







}



function Validator (gArray,sub,marks) {
    if (gArray.length !== sub.length ) {
    validator1 = false;
    return   console.log("Please provide each subject");
    
    }
    else if (gArray.length !== marks.length) {
       validator2 = false;
        return console.log("Please provide marks for each subject");
    }
    else if (gArray.length === sub.length && gArray.length === marks.length ) {
        validator1 = true;
        validator2 = true ;
    }
}


const Graph = graphSub;

module.exports = Graph ;