// Write your helper functions here!


require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    // Here is the HTML formatting for our mission target div.

    document.innerHTML = `  
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
                     `;

}

function validateInput(testInput) {

    let numberInput = Number(testInput);

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(numberInput)) {
        return "is a String";
    } else if (isNaN(numberInput) === false) {
        return "is a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    //     call validateInput to make sure entries are valid and do second test for correct type 

    console.log(fuelLevel);

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "is a String" || validateInput(cargoMass) === "is a String") {
        alert("Make sure to enter valid information for each field!");
    }

    let updatePilot = document.getElementById("pilotStatus");
    let updateCoPilot = document.getElementById("copilotStatus");
    let updateFuel = document.getElementById("fuelStatus");
    let updateCargo = document.getElementById("cargoStatus");
    let updateStatus = document.getElementById("launchStatus");
    let updateItems = document.getElementById("faultyItems");

    // update pilot and copilot using temp literals 

    if ((Number(fuelLevel) > 10000) &&  (Number(cargoMass) < 10000)) {

        //  if entries ok then Lauch is GO !! 

                updateStatus.innerHTML = "Shuttle is ready for launch.";
                updateStatus.style.color = "green";
        
        // else run tests for Levels and Mass       
               
    } else if ((Number(fuelLevel) < 10000) || (Number(cargoMass)) > 10000) {
        updateItems.style.visibility = "visible";
        updateStatus.innerHTML = "Shuttle not ready for launch.";
        updateStatus.style.color = "red";
        updatePilot.innerHTML = `Pilot ${pilot} is ready for launch`;
        updateCoPilot.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (Number(fuelLevel < 10000)) {

            updateItems.innerHTML = `
            <ol>
                <li>Pilot ${pilot} is ready for launch</li>
                <li>Pilot ${copilot} is ready for launch</li>
                <li> "WARNING : There is not enough fuel for the journey ! "</li>
                <li> "Cargo mass low enough for launch"</li>
            </ol>
            `;

        } else if (Number(cargoMass > 10000)) {

            updateItems.innerHTML = `
            <ol>
                <li>Pilot ${pilot} is ready for launch</li>
                <li>Pilot ${copilot} is ready for launch</li>
                <li> "Fuel level high enough for launch. "</li>
                <li> "WARNING : There is too much mass for the cargo to take off ! "</li>          
            </ol>
            `;

        }      
            
        }
    }


    async function myFetch() {

        let planetsReturned;

        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {

            if (response.status >= 400) {
                throw new Error("Bad response");
            } else {
                return response.json();
            }

        });


        return planetsReturned;
    }


    function pickPlanet(planets) {
        var randomPlanet = planets[Math.floor(Math.random() * planets.length)];
        return randomPlanet;
    }

    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet;
    module.exports.myFetch = myFetch;
