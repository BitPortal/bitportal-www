import React from 'react'
import Layout from '../components/Layout'
import {withIntl} from '../i18n'
import {FormattedMessage} from 'react-intl'
import '../styles/pages/500.less'

class ServerErrorPage extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            pageStyles: {}
        }
    }
    componentWillMount () {
        let screenHeight = typeof window !== 'undefined' ? window.screen.availHeight : '100%';
        this.setState({
            pageStyles : {
                minHeight: screenHeight ? (screenHeight - 380) : '100%'
            }
        })
    }
    render () {
        return (
            <Layout>
                <div className="server-error-page" style={this.state.pageStyles}>
                    <div className="container">
                        <h1><FormattedMessage id="serverError.title"/></h1>
                        <p><FormattedMessage id="serverError.content"/></p>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withIntl(ServerErrorPage)
