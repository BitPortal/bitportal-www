import React from 'react'
import MailChimp from './MailChimp'
import SendCloud from './SendCloud'

import './style.less'


export default class Email extends React.Component{
    render () {
        return (
            <div className="email-wrap">
                {this.props.type === 'sendcloud' ? <SendCloud/> : <MailChimp/>}
            </div>
        )
    }
}