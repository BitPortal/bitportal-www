import React from 'react'
import SectionBanner from '../components/IndexPage/SectionBanner'
import SectionFeature from '../components/IndexPage/SectionFeature'
import './index.less';

class IndexPage extends React.Component{
    render () {
        return (
            <div className="index-page">
                <SectionBanner/>
                <SectionFeature/>
            </div>
        )
    }
}

export default IndexPage