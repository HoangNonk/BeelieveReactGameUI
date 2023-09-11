import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import media from '../../../../assets/media';
import './chapter.css';

function Chapter() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageContainerRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    useEffect(() => {
        const imageContainer = imageContainerRef.current;
        const images = imageContainer.querySelectorAll('img');

        function showImage(index) {
            images.forEach((image, i) => {
                if (i === index) {
                    image.classList.remove('hidden');
                } else {
                    image.classList.add('hidden');
                }
            });
        }

        function nextImage() {
            let newIndex = currentImageIndex + 1;
            if (newIndex >= images.length) {
                newIndex = 0;
            }
            setCurrentImageIndex(newIndex);
        }

        function previousImage() {
            let newIndex = currentImageIndex - 1;
            if (newIndex < 0) {
                newIndex = images.length - 1;
            }
            setCurrentImageIndex(newIndex);
        }

        showImage(currentImageIndex);

        prevButtonRef.current.addEventListener('click', previousImage);
        nextButtonRef.current.addEventListener('click', nextImage);

        // Clean up event listeners when the component unmounts
        return () => {
            // prevButtonRef.current.removeEventListener('click', previousImage);
            // nextButtonRef.current.removeEventListener('click', nextImage);
        };
    }, [currentImageIndex]);

    return (
        <>
            <div id="chapter" style={{ width: "100%" }}>
                <div className='position-relative d-flex justify-content-center align-items-center' style={{ width: "100%" }}>
                    <button ref={prevButtonRef} className='me-5'><i className="fa-solid fa-chevron-left"></i></button>
                    <div ref={imageContainerRef} className='image-container d-flex justify-content-center align-items-center' style={{ width: "50%" }}>
                        <img src={media.images.chapter.hanoi} alt="Hình ảnh 1" />
                        <img src={media.images.chapter.hcm} alt="Hình ảnh 2" />
                        <img src={media.images.chapter.danang} alt="Hình ảnh 3" />
                    </div>
                    <button ref={nextButtonRef} className='ms-5'><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </>
    );
}

export default Chapter;
