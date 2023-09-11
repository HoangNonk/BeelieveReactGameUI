import { memo, useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pieces.css'
import media from '../../../../assets/media';

function GetApi() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const ApiUrl = 'http://localhost:3001/images';
    useEffect(() => {
        // Thực hiện cuộc gọi API khi component được tải
        axios.get(ApiUrl)
            .then(response => {
                setData(response.data); // Lấy mảng items từ dữ liệu API
            })
            .catch(error => {
                setError(error);
            });
    }, []); // Truyền mảng rỗng để đảm bảo useEffect chỉ chạy một lần sau khi component được tải

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div className='text-white'>Không có dữ liệu.</div>;
    }

    var imgElements = document.querySelectorAll('.piece_img');
    for (var i = 0; i < imgElements.length; i++) {
        var imgOrder = imgElements[i].dataset.order;
        var imgName = imgElements[i].dataset.piece

        var matchingImage = data.find(image =>
            image.id.toString() === imgOrder &&
            image.picture === imgName
        );

        if (matchingImage) {
            imgElements[i].src = matchingImage.imgUrl;
            imgElements[i].alt = matchingImage['data-order'];
        } else {
            imgElements[i].src = media.images.fakeApi.blank;
            imgElements[i].alt = 'Not Owned yet !';
        }
    }
}

function Pieces() {
    const bigPieces = [
        {
            order: 1,
            id: "HN30",
            name: "Hanoi",
            picture: "",
        },
        {
            order: 2,
            id: "DN56",
            name: "Danang",
            picture: "",
        },
        {
            order: 3,
            id: "HCM59",
            name: "HoChiMinh",
            picture: "",
        },
        {
            order: 4,
            id: "TH36",
            name: "ThanhHoa",
            picture: "",
        },
        {
            order: 5,
            id: "TS",
            name: "TruongSa",
            picture: "",
        },
        {
            order: 6,
            id: "HS",
            name: "HoangSa",
            picture: "",
        },
        {
            order: 7,
            id: "Hue",
            name: "Hue",
            picture: "",
        },
        {
            order: 8,
            id: "HG",
            name: "HaGiang",
            picture: "",
        },
        {
            order: 9,
            id: "CM",
            name: "CaMau",
            picture: "",
        },
        {
            order: 10,
            id: "DB",
            name: "DienBien",
            picture: "",
        }

    ]

    const smallPieces = [
        { order: 1 },
        { order: 2 },
        { order: 3 },
        { order: 4 },
        { order: 5 },
        { order: 6 },
        { order: 7 },
        { order: 8 },
        { order: 9 },
        { order: 10 },
    ]

    function PiecesLayout() {
        return (
            <>
                <div id="pieces" className="h-100 w-100">
                    {bigPieces.map(picture => {
                        return (
                            <div key={picture.order} className="picture" id={picture.id}>
                                <div className="picture_name text-white">
                                    <i className="fa-solid fa-puzzle-piece mystery me-3"></i>{picture.name} Mystery Pieces
                                </div>
                                {smallPieces.map(piece => {
                                    // {data.map(item => {
                                    return (
                                        <div key={piece.order} className="piece"><img className="piece_img" data-piece={picture.id} data-order={piece.order} src="" alt="" /></div>
                                    )
                                    // })}
                                })}
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }

    return (
        <>
            <PiecesLayout />
            <GetApi />
        </>
    )
}

export default memo(Pieces)