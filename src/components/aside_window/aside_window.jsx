import { memo, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aside_window.css';

import Marketplace from './aside_component/marketplace/marketplace';
import Pieces from './aside_component/pieces/pieces';
import Chapter from './aside_component/chapter/chapter';
import Ranking from './aside_component/ranking/ranking';
import Metamask from './aside_component/metamask/metamask';
import Setting from './aside_component/setting/setting';

import media from '../../assets/media';

// const Aside_window = ({ open, asideOrder }) => {
//     // const asides = [
//     //     <aside key={1} className={`aside_function ${asideOrder === 1 ? 'show_aside' : ''}`}>
//     //         <h2 onClick={closeAside}>Setting 1</h2>
//     //     </aside>,
//     //     <aside key={2} className={`aside_function ${asideOrder === 2 ? 'show_aside' : ''}`}>
//     //         <h2 onClick={closeAside}>Setting 2</h2>
//     //     </aside>,
//     //     <aside key={3} className={`aside_function ${asideOrder === 3 ? 'show_aside' : ''}`}>
//     //         <h2 onClick={closeAside}>Setting 3</h2>
//     //     </aside>,
//     //     <aside key={4} className={`aside_function ${asideOrder === 4 ? 'show_aside' : ''}`}>
//     //         <h2 onClick={closeAside}>Setting 4</h2>
//     //     </aside>,
//     //     <aside key={5} className={`aside_function ${asideOrder === 5 ? 'show_aside' : ''}`}>
//     //         <h2 onClick={closeAside}>Setting 5</h2>
//     //     </aside>,
//     //     <aside key={6} className={`aside_function ${asideOrder === 6 ? 'show_aside' : ''}`}>
//     //         <h2 onClick={closeAside}>Setting 6</h2>
//     //     </aside>
//     // ];

//     // return (
//     //     <>
//     //         {open ? asides : ''}
//     //     </>
//     // )

//     const asideData = [
//         {
//             id: 1,
//             name: 'Market Place',
//             imgsrc: aside_img_store,
//             imgalt: '',
//             imgsize: '40px',
//             component: <Marketplace />
//         },
//         {
//             id: 2,
//             name: 'Bag',
//             imgsrc: aside_img_bag,
//             imgalt: '',
//             imgsize: '40px',
//             component: <Bag />
//         },
//         {
//             id: 3,
//             name: 'Chapter',
//             imgsrc: aside_img_chapter,
//             imgalt: '',
//             imgsize: '40px',
//             component: <Chapter />
//         },
//         {
//             id: 4,
//             name: 'Ranking',
//             imgsrc: aside_img_ranking,
//             imgalt: '',
//             imgsize: '40px',
//             component: <Ranking />
//         },
//         {
//             id: 5,
//             name: 'Metamask',
//             imgsrc: aside_img_metamask,
//             imgalt: '',
//             imgsize: '40px',
//             component: <Metamask />
//         },
//         {
//             id: 6,
//             name: 'Setting',
//             imgsrc: aside_img_setting,
//             imgalt: '',
//             imgsize: '40px',
//             component: <Setting />
//         },
//     ];

//     const closeAside = () => {
//         const asideElements = document.querySelectorAll('.aside_function');
//         asideElements.forEach(asideElement => {
//             asideElement.classList.remove('show_aside');
//         });
//     };

//     return (
//         <>
//             {open &&
//                 asideData.map(aside => (
//                     <aside key={aside.id} className={`aside_function ${asideOrder === aside.id ? 'show_aside' : ''}`}>
//                         <div className="title_aside position-absolute d-flex justify-content-between align-items-center"
//                             style={{ top: "3%", left: "3%" }}>
//                             <img width={aside.imgsize} src={aside.imgsrc} alt={aside.imgalt} />
//                             <h4 className="text-white m-0 ms-3" style={{ lineHeight: '40px' }}>{aside.name}</h4>
//                         </div>
//                         <button className='esc_aside bg-transparent border-0 text-white position-absolute' style={{ right: "3%", top: "3%" }} onClick={closeAside}>
//                             <i className="fa-solid fa-xl fa-xmark"></i>
//                         </button>
//                         {aside.component}
//                     </aside>
//                 ))}
//         </>
//     );
// }
//  --------------------------------

function Aside_window() {
    const asideData = [
        {
            order: 1,
            id: 'aside_market',
            name: 'Market Place',
            imgsrc: media.images.aside.store,
            imgalt: '',
            imgsize: '40px',
            component: <Marketplace />
        },
        {
            order: 2,
            id: 'aside_bag',
            name: 'Pieces',
            imgsrc: media.images.aside.bag,
            imgalt: '',
            imgsize: '40px',
            component: <Pieces />
        },
        {
            order: 3,
            id: 'aside_chapter',
            name: 'Chapter',
            imgsrc: media.images.aside.chapter,
            imgalt: '',
            imgsize: '40px',
            component: <Chapter />
        },
        {
            order: 4,
            id: 'aside_ranking',
            name: 'Ranking',
            imgsrc: media.images.aside.ranking,
            imgalt: '',
            imgsize: '40px',
            component: <Ranking />
        },
        {
            order: 5,
            id: 'aside_metamask',
            name: 'Metamask',
            imgsrc: media.images.aside.metamask,
            imgalt: '',
            imgsize: '40px',
            component: <Metamask />
        },
        {
            order: 6,
            id: 'aside_setting',
            name: 'Setting',
            imgsrc: media.images.aside.setting,
            imgalt: '',
            imgsize: '40px',
            component: <Setting />
        },
    ];
    return (
        <>
            {asideData.map((aside,index) => (
                <aside key={index} id={aside.id} className="aside_function">
                    <div className="title_aside position-absolute d-flex justify-content-between align-items-center"
                        style={{ top: "3%", left: "3%" }}>
                        <img width={aside.imgsize} src={aside.imgsrc} alt={aside.imgalt} />
                        <h4 className="text-white m-0 ms-3" style={{ lineHeight: '40px' }}>{aside.name}</h4>
                    </div>
                    <button className='esc_aside bg-transparent border-0 text-white position-absolute' style={{ right: "3%", top: "3%" }}>
                        <i className="fa-solid fa-xl fa-xmark"></i>
                    </button>
                    {aside.component}
                </aside>
            ))}
        </>
    )
}

export default memo(Aside_window);