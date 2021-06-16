import React from 'react';
import './motto.css';
import Logo from '../../assetts/Small-Fri-Logo-Transparent.png';

const Motto = () => {
    return (
        <div id="motto">
            <div className="container-fluid py-5">
                <div className="row py-2">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <img className="motto-logo" src={Logo} alt="Small Fri Logo" />
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-12 pb-5">
                        <h1 className="m-0 text-white display-4 fw-normal text-center">
                            “Dedicated to the Mental, Social, Emotional, and Physical Growth of Children”
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Motto;