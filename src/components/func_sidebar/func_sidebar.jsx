import { memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './func_sidebar.css';
import media from '../../assets/media';

const buttons_sidebar = [
    {
        order: 1,
        id: 'button_store',
        class: 'mb-5',
        width: 'fit-content',
        imgsrc: media.images.button_sidebar.store,
        alt: '',
    },
    {
        order: 2,
        id: 'button_bag',
        class: 'mb-5',
        width: 'fit-content',
        imgsrc: media.images.button_sidebar.bag,
        alt: ''
    },
    {
        order: 3,
        id: 'button_chapter',
        class: 'mb-5',
        width: 'fit-content',
        imgsrc: media.images.button_sidebar.chapter,
        alt: ''
    },
    {
        order: 4,
        id: 'button_ranking',
        class: 'mb-5',
        width: 'fit-content',
        imgsrc: media.images.button_sidebar.ranking,
        alt: ''
    },
    ,
    {
        order: 5,
        id: 'button_metamask',
        class: 'mb-5',
        width: 'fit-content',
        imgsrc: media.images.button_sidebar.metamask,
        alt: ''
    },
    {
        order: 6,
        id: 'button_setting',
        class: 'mb-5',
        width: 'fit-content',
        imgsrc: media.images.button_sidebar.setting,
        alt: ''
    },
]

// const Func_sidebar = ({ openAsideWindow }) => {
//     return (
//         <ul id="func_sidebar" className="d-flex flex-column list-unstyled" style={{ position: "fixed", top: "10%", left: "2%" }}>
//             {buttons_sidebar.map(btn => {
//                 return (
//                 <li key={btn.id} id={btn.id} onClick={() => openAsideWindow(btn.order)} className={btn.class} style={{ width: btn.width }}>
//                     <img src={btn.imgsrc} alt={btn.alt} />
//                 </li>
//                 )
//             })}
//         </ul>
//     )
// }

function Func_sidebar() {
    return (
        <ul id="func_sidebar" className="d-flex flex-column list-unstyled" style={{ position: "fixed", top: "10%", left: "2%" }}>
            {buttons_sidebar.map((btn,index) => {
                return (
                <li key={index} id={btn.id} className={btn.class} style={{ width: btn.width }}>
                    <img src={btn.imgsrc} alt={btn.alt} />
                </li>
                )
            })}
        </ul>
    )
}

export default memo(Func_sidebar);