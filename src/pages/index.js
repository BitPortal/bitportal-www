import React from 'react'
import SectionBanner from '../components/IndexPage/SectionBanner'
import SectionFeature from '../components/IndexPage/SectionFeature'
import SectionSubscribe from '../components/IndexPage/SectionSubscribe'
import Layout from '../components/Layout'
import {withIntl, Link} from '../i18n'
import Fade from 'react-reveal/Fade'
import './index.less';

class IndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div className="index-page">
                    <Fade bottom>
                        <SectionBanner/>
                    </Fade>
                    <Fade bottom>
                        <SectionFeature/>
                    </Fade>
                    <Fade bottom>
                        <SectionSubscribe/>
                    </Fade>
                </div>
            </Layout>
        )
    }
}

export default withIntl(IndexPage)