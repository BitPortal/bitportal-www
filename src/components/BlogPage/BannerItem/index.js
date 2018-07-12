import React from 'react'
import './style.less'

class BannerItem extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="banner-item">
                            <a href={this.props.bannerData.node.jump_url}>
                                <img className="banner-img" src={this.props.bannerData.node.img_url}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default BannerItem