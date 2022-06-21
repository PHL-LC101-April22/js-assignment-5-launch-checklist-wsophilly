// Write your JavaScript code here!

window.addEventListener("load", function () {

    let form = document.querySelector("#launchForm");

        let planetsReturned = 0;
        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);

            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

             let uniquePlanet = pickPlanet(listedPlanets);
             let uniquePlanetName = uniquePlanet.name;
             let uniquePlanetDiameter = uniquePlanet.diameter;
             let uniquePlanetStar = uniquePlanet.star;
             let uniquePlanetDistance = uniquePlanet.distance;
             let uniquePlanetImage = uniquePlanet.image;
             let uniquePlanetMoons = uniquePlanet.moons;
             const div = document.getElementById("missionTarget");

             addDestinationInfo(div,uniquePlanetName,uniquePlanetDiameter,uniquePlanetStar,uniquePlanetDistance,uniquePlanetMoons,uniquePlanetImage);

            form.addEventListener("submit", function (event) {
                event.preventDefault();

            let list = document.getElementById("faultyItems");

            let inputpilotName = document.querySelector("input[name=pilotName]");
            let pilotNameValue = inputpilotName.value;

            let inputcopilotName = document.querySelector("input[name=copilotName]");
            let copilotNameValue = inputcopilotName.value;

            let inputfuelLevel = document.querySelector("input[name=fuelLevel]");
            let fuelLevelValue = inputfuelLevel.value;

            let inputcargoMass = document.querySelector("input[name=cargoMass]");
            let cargoMassValue = inputcargoMass.value; 
    

            formSubmission(document, list, pilotNameValue, copilotNameValue, fuelLevelValue, cargoMassValue);



        })

    });

});