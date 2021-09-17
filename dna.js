
function dnaCheck(dna){
    let dnaChecked=[];
    for (var i = 0; i < dna.length; i++) {
        if(dna.charAt(i)=="A" || dna.charAt(i)=="C" || dna.charAt(i)=="G" || dna.charAt(i)=="T")
        dnaChecked.push(dna.charAt(i));
    }
    return dnaChecked.join("");
}


export {dnaCheck};