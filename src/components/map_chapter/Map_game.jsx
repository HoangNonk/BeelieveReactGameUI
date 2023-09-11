import { memo, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './map_game.css';
import './animate.css';

import media from '../../assets/media';

import { useState, useEffect } from 'react';

import Func_sidebar from '../func_sidebar/func_sidebar';
import Aside_window from '../aside_window/aside_window';
import Audio from '../audio/audio';
import Player from '../player/player';
import question from '../question/question';


const openSpot = () => {
    // console.log('touch');
}

function MapLayout() {
    const spot_chapter = [
        {
            key: 1,
            top: '50%',
            left: '20%',
            right: '',
            img_src: media.images.map.spot,
            class: "chapter spot",
            alt: ''
        },
        {
            key: 2,
            top: '40%',
            left: '35%',
            right: '',
            img_src: media.images.map.spot,
            class: "chapter spot",
            alt: ''
        },
        {
            key: 3,
            top: '60%',
            left: '50%',
            right: '',
            img_src: media.images.map.spot,
            class: "chapter spot",
            alt: ''
        },
        {
            key: 4,
            top: '70%',
            left: '',
            right: '30%',
            img_src: media.images.map.spot,
            class: "chapter spot",
            alt: ''
        },
        {
            key: 5,
            top: '30%',
            left: '',
            right: '15%',
            img_src: media.images.map.treasure,
            class: "chest spot",
            alt: ''
        }
    ]

    return (
        <>
            {spot_chapter.map(spot => {
                return (
                    <>
                        <div key={spot.key} onClick={openSpot} className={spot.class} style={{ position: "absolute", top: spot.top, left: spot.left, right: spot.right }}>
                            <img width={'100px'} src={spot.img_src} alt={spot.alt} />
                        </div>
                    </>
                )
            })}
            <div id='button_next_chapter' className="position-absolute d-flex justify-content-between align-items-center" style={{ bottom: "3%", right: "2%" }}>
                <span id='title'>Next Chapter</span>
                <span id='shape_move'><i className="fa-solid fa-arrow-right-long"></i></span>
            </div>
        </>
    )
}

function Map() {

    useEffect(() => {
        const bg_sound = document.getElementById('music_background');
        const open_sound = document.getElementById('open_sound');
        const close_sound = document.getElementById('close_sound');
        const touch_sound = document.getElementById('touch_sound');

        const button_mute_bg_sound = document.getElementById('button_mute_bg_sound');

        button_mute_bg_sound.onclick = () => {
            if (bg_sound.muted) {
                bg_sound.muted = false;
            } else {
                bg_sound.currentTime = 0; // Đặt thời gian về đầu khi bật lại âm thanh
                bg_sound.muted = true;
            }
        }

        const button_mute_effect_sound = document.getElementById('button_mute_effect_sound');
        const game_sound = document.querySelectorAll('.game_sound');

        button_mute_effect_sound.onclick = () => {
            game_sound.forEach(sound => {
                if (sound.muted) {
                    sound.muted = false;
                } else {
                    sound.muted = true;
                }
            });
        }

        const spots_chapter = document.querySelectorAll('.spot');
        Array.from(spots_chapter).map(spot => {
            spot.addEventListener('click', () => {
                touch_sound.play();
            })
        })

        const children_sidebar = document.querySelectorAll('aside');
        // Lặp qua các aside và thêm sự kiện click cho từng nút button trong từng aside
        Array.from(children_sidebar).map(child => {
            const btn_close_sidebar = child.querySelectorAll('.esc_aside');

            Array.from(btn_close_sidebar).map((close) => {
                close.addEventListener('click', () => {
                    Array.from(buttons_sidebar).map((btn) => {
                        btn.classList.remove('click_btn_sidebar');
                    });

                    // add close sound
                    close_sound.play();

                    // show aside
                    child.classList.remove('show_aside')
                });
            });
        });

        const buttons_sidebar = document.querySelectorAll('#func_sidebar li');
        // Lặp qua các nút li và thêm sự kiện click
        Array.from(buttons_sidebar).map(button => {
            button.addEventListener("click", () => {
                // Loại bỏ lớp 'click_btn_sidebar' từ tất cả các nút li
                Array.from(buttons_sidebar).map((btn) => {
                    btn.classList.remove('click_btn_sidebar');
                });

                Array.from(children_sidebar).map((side) => {
                    side.classList.remove('show_aside')
                });

                // add open sound
                open_sound.play();

                // Thay đổi kích thước width của aside tương ứng
                const childIndex = Array.from(buttons_sidebar).indexOf(button);
                children_sidebar[childIndex].classList.add('show_aside')

                // Thêm hoặc loại bỏ lớp 'click_btn_sidebar' cho nút li hiện tại
                button.classList.add('click_btn_sidebar');
            });
        });

        window.addEventListener('mouseup', (event) => {
            bg_sound.play();
        })
    }, []);

    return (
        <>
            <Audio />
            <div key={'game_map'} id='map' className='d-flex justify-content-between align-items-center position-relative'>
                <MapLayout />
                <Player />
                <Aside_window />
                <Func_sidebar />
            </div>
        </>
    )
}

export default memo(Map);