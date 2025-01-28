import { deletePlayer } from "../api"
import { useParams, useNavigate } from "react-router-dom";

export default function SinglePlayer({ player, getData }) {

    const navigate = useNavigate();

    async function handleDelete() {
        await deletePlayer(player.id);
        getData();
    }

    function moreDetails() {
        navigate(`/${player.id}`);
    }

    return (
        <>
            <div className="playerCard">
                <img src={player.imageUrl} />
                <h1>Name: {player.name}</h1>
                <button id="details" onClick={moreDetails}>
                    Details
                </button>
                <button id="delete" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </>
    );
}