const fillGasTank = (gallons) => {
    if (gallons <= 15) {
        console.log(`I filled the tank with ${gallons} of gas`)    
    }
    else console.log(`you cannot add this much gas to the tank`)
    
}

fillGasTank(17)
fillGasTank(13)
