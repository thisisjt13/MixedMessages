const stations = ['Brighton', 'Preston Park', 'Basingstoke', 'Crewe', 'Littlehampton', 'Fareham', 'Alton', 'Catford', 'Milton Keynes Central', 'Manchester Piccadilly', 'London Bridge', 'Aberdeen', 'London Kings Cross'];
const trainOperator = ['Great Western Railway', 'Southern', 'Avanti West Coast', 'ScotRail', 'Thameslink', 'South Western Railway', 'EMR'];
const formations = ['2','4','6','8','10','12']
 
const generateJourney = () => {
    let stationCopy = stations.slice()
    let destination = () => {
    let randIndex = Math.floor(Math.random() * stationCopy.length)
     return stationCopy[randIndex]  
    };
    let operator = () => {
     let randIndex = Math.floor(Math.random() * trainOperator.length)
     return trainOperator[randIndex]  
    };
    let formation = () => {
        let randIndex = Math.floor(Math.random() * formations.length)
        return formations[randIndex]
    };
    let callingPattern = () => {
        let randCallingPattern = []
        let numOfStations = Math.floor(Math.random() * stationCopy.length)
        if (numOfStations < 2) {
            numOfStations
        };
        
        for(let i = 0; i < numOfStations; i++) {
            let randIndex =  Math.floor(Math.random() * numOfStations)
            if (randCallingPattern.includes(stationCopy[randIndex]) || stationCopy[randIndex] === destination) {
                randIndex
            } else { randCallingPattern.push(stationCopy[randIndex])  
         }
    
        }
    return randCallingPattern       
    };

return `This is the ${operator()} service to ${destination()} calling at ${callingPattern()}. This service is formed of ${formation()} coaches`
}

console.log(generateJourney())