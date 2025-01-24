import SinglePlayer from "./SinglePlayer";
import { useEffect, useState } from "react";
import { getPlayers } from "../api";
import { Route, Routes } from "react-router-dom";

export default function AllPlayers() {

    const [players, setPlayers] = useState([]);
    useEffect(() => {
        async function getData() {
            const playersData = await getPlayers();
            setPlayers(playersData);

        }
        getData();

    }, []

    )
    return (
        players.map(player => {
            return (

                <SinglePlayer player={player} />

            )
        })

        // <SinglePlayer player={players[0]} />
        // <SinglePlayer player={players[1]} />
        // <SinglePlayer player={players[2]} />

    );

    // return (
    //     players.map(player => {
    //         return (
    //             <Routes>
    //                     <Route path='/player/:id' element={<SinglePlayer player = { player } />} />
    //             </Routes>
    //         )
    //     })

    //         // <SinglePlayer player={players[0]} />
    //         // <SinglePlayer player={players[1]} />
    //         // <SinglePlayer player={players[2]} />

    // );



}