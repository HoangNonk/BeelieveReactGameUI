import { memo } from "react";
import media from "../../assets/media";
import 'bootstrap/dist/css/bootstrap.min.css';
import './player.css'

function Player() {
    return (
        <>
            <div id="player" className="d-flex justify-content-end align-items-center position-absolute" style={{ right: "1%", top: "1%" }}>
                <ul id="info_player" className="list-unstyled">
                    <li className="fw-bold">
                        <p className="text-white me-5" style={{fontFamily: "Tahoma"}}>Player_Unknow_1</p>
                    </li>
                    <li>
                        <ul id="unit" className="list-unstyled d-flex justify-content-between gap-3">
                            <li className="text-white d-flex align-items-center me-1"><img width={'30px'} src={media.images.player.crypto} alt={media.images.player.crypto} />
                                0
                            </li>
                            <li className="text-white d-flex align-items-center me-1"><img width={'30px'} src={media.images.player.chapter} alt={media.images.player.chapter} />
                                0
                            </li>
                            <li className="text-white d-flex align-items-center me-1"><img width={'30px'} src={media.images.player.trophies} alt={media.images.player.trophies} />
                                0
                            </li>
                        </ul>
                    </li>
                </ul>
                <img id="avatar_player" width={'90px'} className="rounded-3 ms-5" style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                    src={media.images.player.avatar} alt={media.images.player.avatar} />
            </div>
        </>
    )
}

export default memo(Player);