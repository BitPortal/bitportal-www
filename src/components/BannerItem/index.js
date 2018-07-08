import React from 'react'
import './banner.less'

class BannerItem extends React.Component {
    render () {
        return (
            <div className="col-sm-6">
                <div className="banner-item">
                    <a href={this.props.bannerData.node.jump_url}>
                        <img className="banner-img" src={this.props.bannerData.node.img_url}/>
                    </a>
                </div>
            </div>
        )
    }
}

export default BannerItem