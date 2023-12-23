function calculee() {
    var girl = document.getElementById("girl").checked ; 
    var Boy = document.getElementById("boy").checked ;
    var old = document.getElementById("old").value;
    var tall = document.getElementById("tall").value;
    var weight = document.getElementById("weight").value;
    var act = parseFloat(document.getElementById("active").value);

    if ( old === "" || tall === "" || weight === "" ) {
        document.getElementById("resultContainer2").innerHTML = "Veuillez vérifier vos données";
        return; 
    }
    if(!girl){
        bmr = 10 * weight + 6.25 * tall - 5 * old + 5;
    }
    else{
        bmr = 10 * weight + 6.25 * tall - 5 * old - 161;
    }
    tdee = bmr * act;
    lose=tdee-500;
    gain=tdee+500;
    document.getElementById("resultContainer2").innerHTML =
        "Votre besoin calorique quotidien est : " + tdee.toFixed(2) + " calories.";
        document.getElementById("resultContainer1").innerHTML =
        "for losing weight : " + lose.toFixed(2) + " calories.";
        document.getElementById("resultContainer3").innerHTML =
        "for gaining weight  : " + gain.toFixed(2) + " calories.";
}
