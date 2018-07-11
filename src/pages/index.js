import React from 'react'
import SectionBanner from '../components/IndexPage/SectionBanner'
import SectionFeature from '../components/IndexPage/SectionFeature'
import SectionSubscribe from '../components/IndexPage/SectionSubscribe'
import MobileBlocks from '../components/IndexPage/MobileBlocks'
import './index.less';

class IndexPage extends React.Component{
    render () {
        return (
            <div className="index-page">
                <SectionBanner/>
                <SectionFeature/>
                <SectionSubscribe/>
                <MobileBlocks/>
            </div>
        )
    }
}

export default IndexPage