import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

class MailChimp extends React.Component{
    componentDidMount () {
        // document.getElementsByClassName('Mailchimp-submit')[0].innerHTML = 'Subscribe'
    }
    render () {
        return (
            <MailchimpSubscribe url={'https://bitportal.us18.list-manage.com/subscribe/post?u=74a5bedff058041c73ef4bb41&amp;id=f5c370464c'}/>
        )
    }
}

export default MailChimp