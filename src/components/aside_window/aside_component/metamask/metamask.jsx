import { memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import media from '../../../../assets/media';
import './metamask.css'

function Metamask(){
    return (
        <>
            <div id="metamask" className="d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center bg-body-secondary p-5 rounded-4">
                    <h4 id="status_wallet">Connect to Metamask Wallet here !</h4>
                    <p id="loginMetamask" className="mt-2 p-3 border-0" style={{ backgroundColor: "#353535" , borderRadius: "50%"}}>
                        <img id="logo_status_metamask" width="40px" src={media.images.aside.metamask} alt={media.images.aside.metamask} />
                    </p>
                </div>
            </div>
        </>
    )
}

export default memo(Metamask)