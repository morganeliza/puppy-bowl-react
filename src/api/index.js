const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2409-GHP-ET-WEB-PT"

export async function getPlayers() {
    try {
        const response = await fetch(BASE_URL + '/players');
        const json = await response.json();
        const result = json.data;
        console.log(result.players)
        return result.players;
    }
    catch {
        console.log("getPlayers");
    }

}

export function addPlayer(player) {
}

export function deletePlayer(playerId) {
    console.log(`deletePlayer: ${playerId}`);
}

// export async function getSinglePlayer() {
//     try {
//         const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players/${id}`);
//         const json = await response.json();
//         const result = json.data;
//         console.log(result.players)
//         return result.players;
//     }
//     catch {
//         console.log("getSinglePlayer");
//     }

// }


getPlayers()
// getSinglePlayer()