import { useState, memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './setting.css';
import media from '../../../../assets/media';

const Setting = () => {

    const [musicChecked, setMusicChecked] = useState(true); // Trạng thái mặc định cho nút Music
    const [soundChecked, setSoundChecked] = useState(true); // Trạng thái mặc định cho nút Sound

    const setting_comp = [
        {
            order: 1,
            id: 'button_mute_bg_sound',
            class: 'd-flex justify-content-between align-items-center gy-3',
            name: 'Music',
            status: musicChecked,
            comp_child: '',
        },
        {
            order: 2,
            id: 'button_mute_effect_sound',
            class: 'd-flex justify-content-between align-items-center gy-3',
            name: 'Sound',
            status: soundChecked,
            comp_child: '',
        },
    ]
    
    const social_media = [
        {
            order: 1,
            id: 'facebook',
            name: 'Our fanpage',
            class: 'd-flex justify-content-between align-items-center gy-3',
            logo: media.images.socialMedia.facebook,
        },
        {
            order: 2,
            id: 'discord',
            name: 'Join Discord',
            class: 'd-flex justify-content-between align-items-center gy-3',
            logo: media.images.socialMedia.discord,
        },
        {
            order: 3,
            id: 'youtube',
            name: 'Youtube',
            class: 'd-flex justify-content-between align-items-center gy-3',
            logo: media.images.socialMedia.youtube,
        },
    ]

    return (
        <>
            {setting_comp.map(comp => {
                return (
                    <div key={comp.order} id={(comp.name).toLocaleLowerCase()} className={`${comp.class} setting_child`} style={{ width: "30%" }}>
                        <h4 className=''>{comp.name}</h4>
                        <label className='switch_toggle_audio'>
                            <input id={comp.id} type="checkbox"
                                checked={comp.status}
                                onChange={() => comp.id === 'button_mute_bg_sound' ? setMusicChecked(!musicChecked) : setSoundChecked(!soundChecked)}
                            />
                            <span className="slider_button_audio round"></span>
                        </label>
                    </div>
                )
            })}
            {social_media.map(social => {
                return (
                    <div key={social.order} id={social.id} className={`${social.class} setting_child social_media`} style={{ width: "30%" }}>
                        <h4 className=''>{social.name}</h4>
                        <img width={'50px'} id={`logo_${social.id}`} className='logo_social' src={social.logo} alt={social.name} />
                    </div>
                )
            })}

        </>
    )
}

export default memo(Setting)