import React from 'react'
import SectionBanner from '../components/IndexPage/SectionBanner'
import SectionFeature from '../components/IndexPage/SectionFeature'
import SectionSubscribe from '../components/IndexPage/SectionSubscribe'
import Layout from '../components/Layout'
import {withIntl, Link} from '../i18n'
import './index.less';

class IndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div className="index-page">
                    <SectionBanner/>
                    <SectionFeature/>
                    <SectionSubscribe/>
                </div>
            </Layout>
        )
    }
}

export default withIntl(IndexPage)