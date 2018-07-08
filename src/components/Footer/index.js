import React from 'react'
import ShareGroup from '../ShareGroup'
import './footer.less'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='container footer-container'>
                    <div className="row">
                        <div className="col-md-2 col-xs-6">
                            <ul className="footer-link-wrap">
                                <li><a href="#">Home</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-xs-6">
                            <ul className="footer-link-wrap">
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12 footer-location">
                            <span>Shanghai Pudong District</span>
                            <span className="icon icon-locate"></span>
                        </div>
                    </div>
                    <div className="row">
                        <ShareGroup theme={'dark'}/>
                    </div>
                </div>
                <div className="footer-logo">
                    <div className="container">
                        <img src="/static/logo.png" className="footer-logo-img"/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer