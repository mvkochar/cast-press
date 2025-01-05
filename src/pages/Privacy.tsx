import React from 'react'
import './css/Privacy.css'

const Privacy = () => {
    return (
        <div className='privacy-container'>
            <h1 className="privacy-title">Privacy Policy</h1>
            <div className="privacy-content d-f">
                <div>
                    <h2 className="privacy-bl-title">Your details and data</h2>
                    <p className="privacy-bl-desc">
                        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
                        sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
                        eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor
                        magna et, placerat urna. Curabitur eu magna enim. Proin placerat
                        tortor lacus, ac sodales lectus placerat quis. Curabitur ultricies ex ante,
                        eu placerat ipsum hendrerit ut. Maecenas ornare tellus id consequat mollis.
                        Aenean urna risus, dignissim non cursus nec, volutpat hendrerit libero.
                    </p>
                </div>
                <div>
                    <h2 className="privacy-bl-title">Security</h2>
                    <p className="privacy-bl-desc">
                        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin
                        ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus
                        scelerisque a. Nam ac urna maximus, tempor magna et.
                    </p>
                </div>
                <div>
                    <h2 className="privacy-bl-title">Cookies</h2>
                    <ul className="privacy-bl-list">
                        <li>
                            Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies
                            placerat et ac neque. Proin risus eros.
                        </li>
                        <li>
                            Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies 
                            placerat et ac neque. Proin risus eros.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Privacy