const age = 27;
const isFemale = true;
const driverStatus = "bob"  // is dat dan niet bobette? 
const isDrunk = false

if (age >= 18) {
    console.log("Je bent oud genoeg.");
    if (isFemale) {
        console.log("Kom binnen schatje.");
    } else {
        console.log("Dat wordt dokken ouwe.")
    }
} else {
    console.log("De speeltuin is verderop.");
}

// later op de avond

if (driverStatus == "bob") {
    if (isDrunk) {
        console.log("Zal ik maar een taxi voor je bellen?");
    } else {
        console.log("Rijd voorzichtig.")
    }
} else {
    console.log("Waar is je bob?")
}