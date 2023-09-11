import { memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import media from '../../../../assets/media';
import './ranking.css'

const players = [
    {
        order: 1,
        id: 'ranking1st',
        avatar: media.images.player.avatar,
        name: 'Player_Unknow_1',
        trophies: media.images.aside.ranking,
        rank: media.images.ranking_board.rank1
    },
    {
        order: 2,
        id: 'ranking2nd',
        avatar: media.images.player.avatar2,
        name: 'Player_Unknow_2',
        trophies: media.images.aside.ranking,
        rank: media.images.ranking_board.rank2
    },
    {
        order: 3,
        id: 'ranking3rd',
        avatar: media.images.player.avatar3,
        name: 'Player_Unknow_3',
        trophies: media.images.aside.ranking,
        rank: media.images.ranking_board.rank3
    },
    {
        order: 4,
        id: '',
        avatar: media.images.player.avatar4,
        name: 'Player_Unknow_4',
        trophies: '',
        rank: media.images.ranking_board.rank4,
    },
    {
        order: 5,
        id: '',
        avatar: media.images.player.avatar5,
        name: 'Player_Unknow_5',
        trophies: '',
        rank: media.images.ranking_board.rank5,
    },
    {
        order: 6,
        id: '',
        avatar: media.images.player.avatar6,
        name: 'Player_Unknow_6',
        trophies: '',
        rank: media.images.ranking_board.rank6,
    },
    {
        order: 7,
        id: '',
        avatar: media.images.player.avatar7,
        name: 'Player_Unknow_7',
        trophies: '',
        rank: media.images.ranking_board.rank7,
    },
    {
        order: 8,
        id: '',
        avatar: media.images.player.avatar8,
        name: 'Player_Unknow_8',
        trophies: '',
        rank: '',
    },
    {
        order: 9,
        id: '',
        avatar: media.images.player.avatar9,
        name: 'Player_Unknow_9',
        trophies: '',
        rank: '',
    },
]


function Ranking() {
    return (
        <>
            <div id="ranking" className="w-100 h-100 d-flex justify-content-center align-items-center">
                <ul className="list-unstyled d-flex flex-column align-items-center w-100 h-100">
                    {players.map((player, index) => {
                        return (
                            <li key={player.order} id={player.id}>
                                <img width={'40px'} className={`rank_player rank_player_${player.order}`} src={player.rank} alt={player.rank} />
                                <img width={'100px'} className='avatar_rank_player' src={player.avatar} alt={player.avatar} />
                                <p className={`name_rank_player name_player_${player.order}`}>{player.name}</p>
                                <img width={'50px'} className='trophies' src={player.trophies} alt={player.trophies} />
                                <img width={'25px'} className={`add_friend add_${player.order}`} src={media.images.ranking_board.add} alt={media.images.ranking_board.add} />
                                <img width={'25px'} className={`info_rank_player info_player_${player.order}`} src={media.images.ranking_board.info} alt={media.images.ranking_board.info} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default memo(Ranking)