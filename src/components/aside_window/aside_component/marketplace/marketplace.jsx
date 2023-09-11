import { memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './marketplace.css'
import media from '../../../../assets/media';

const Market = () => {
    return (
        <div id="market">
            <h2>Go to Market</h2><img width={'60px'} src={media.images.aside.store} alt="" />
        </div>
    )
}

export default memo(Market)