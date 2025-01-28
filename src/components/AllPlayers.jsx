import SinglePlayer from "./SinglePlayer";
import { useEffect, useState } from "react";
import { getPlayers } from "../api";
import NewPlayerForm from "./NewPlayerForm";

export default function AllPlayers() {

    const [players, setPlayers] = useState([]);
    const [searchParam, setSearchParam] = useState("");

    async function getData() {
        const playersData = await getPlayers();
        setPlayers(playersData);

    }

    const playersToShow = searchParam
        ? players.filter((player) =>
            player.name.toLowerCase().startsWith(searchParam)
        )
        : players;

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
          <h1>Add a Player</h1>
          <NewPlayerForm getData={getData} />
          <h1>Players</h1>
          <div>
            <label>
              Search:{" "}
              <input
                type="text"
                placeholder="search"
                onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
              />
            </label>
          </div>
          {playersToShow.map((player) => {
            return (
              <SinglePlayer key={player.id} player={player} getData={getData} />
            );
          })}
        </div>
      );
    }