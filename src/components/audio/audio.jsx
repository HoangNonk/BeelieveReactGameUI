import { memo } from "react";
import media from "../../assets/media";

function Audio() {
    return (
        <>
            {/* game sound */}
            <div key={'game_sound'} id="game_soundtrack" className="d-none">
                <audio id="music_background" src={media.sounds.background} autoPlay loop ></audio>
                <audio className="game_sound" id="open_sound" src={media.sounds.open}></audio>
                <audio className="game_sound" id="close_sound" src={media.sounds.close} ></audio>
                <audio className="game_sound" id="touch_sound" src={media.sounds.touch} ></audio>
            </div>
        </>
    )
}

export default memo(Audio);