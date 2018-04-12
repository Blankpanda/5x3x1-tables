function fillTables() {
    var deadliftOneRm = parseInt(document.getElementById("DEADLIFT-1RM-textbox").value);
    var ohpOneRm = parseInt(document.getElementById("OHP-1RM-textbox").value);
    var benchOneRm = parseInt(document.getElementById("BENCH-1RM-textbox").value);
    var squatOneRm = parseInt(document.getElementById("SQUAT-1RM-textbox").value);


    if (validateTextboxes(deadliftOneRm,ohpOneRm,benchOneRm,squatOneRm)) {
        showWeekTables();
        generatePhases(deadliftOneRm,ohpOneRm,benchOneRm,squatOneRm);
    }
}

function generatePhases() {
    var tableTemplate = "<table><tr><td>Set</td><td>90% of 1RM</td><td>Reps</td>";
    var liftsDiv = document.getElementById("lift-phases")
    for(var i = 0; i < 4; i++) { // 4 phases
        liftsDiv.write(tableTemplate);
    }
}
function showWeekTables() {
    document.getElementById("week-tables").style.display ="block";
}
function validateTextboxes(dlVal,ohpVal,benchVal,squatVal) {
    var errors = [];
    
    if (isNaN(dlVal)) {
        errors.push("Deadlift 1RM is invalid.");
    }
    if(isNaN(ohpVal)) {
        errors.push("OHP 1RM is invalid.");
    }
    if(isNaN(benchVal)) {
        errors.push("Bench 1RM is invalid.");
    }
    if(isNaN(squatVal)) {
        errors.push("Squat 1RM is invalid.");
    }

    console.log(errors);

    if (errors.length == 0) {
        return 1;
    }

    printErrorMessage(errors);
    return 0;
}

function printErrorMessage(errorsList) {
    var msg = "";
    for(var i = 0; i < errorsList.length; i++) {
        msg += errorsList[i] + "\n";
    }

    alert(msg);
}
function get90percent(liftOneRm) {
    return 0.90 * liftOneRm;
}
