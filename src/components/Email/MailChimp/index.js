import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

class MailChimp extends React.Component{
    componentDidMount () {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('language') === 'zh'){
            document.getElementsByClassName('subscribe-form-wrap')[0].getElementsByTagName('input')[0].placeholder = '请输入您的邮箱'

            document.getElementsByClassName('subscribe-form-wrap')[0].getElementsByTagName('button')[0].innerText = '订阅'
        }
    }
    render () {
        return (
            <MailchimpSubscribe url={'https://bitportal.us18.list-manage.com/subscribe/post?u=74a5bedff058041c73ef4bb41&amp;id=f5c370464c'}/>
        )
    }
}

export default MailChimp