import { deletePlayer } from "../api"
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { getSinglePlayer } from "../api";

export default function SinglePlayer({ player }) {

    const { id } = useParams()

    // useEffect(() => {
    //     async function getData() {
    //         const playersData = await getSinglePlayer();
    //         setPlayers(playersData);

    //     }
    //     getData();

    // }, [id]

    // )

    function handleDelete() {
        deletePlayer(player.id);
    }

    return (
        <div key={player.id} className="playerCard">
            <img src={player.imageUrl} />
            <h1>Name: {player.name}</h1>
            <h2>Breed: {player.breed}</h2>
            <h2>Status: {player.status}</h2>
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/player/${player.id}`}>More Details</Link>

        </div>


    )


}