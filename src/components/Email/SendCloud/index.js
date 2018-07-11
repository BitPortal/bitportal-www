import React from 'react'
import './style.less'
const sendObj = require('../../../lib/sendCloud')

class SendCloud extends React.Component{
    componentDidMount () {
        console.log(sendObj)
        const option = {
            type: 'embed',
            expires: '86400000',
            trigger: 'load',
            invitecode: 'b370f8b1-378c-422e-a70b-e7fb8ff09a89',
            title: '不想错过任何动态？邮件订阅我们吧！',
            successMsg: '请登录邮箱，点击确认订阅链接，即可订阅成功啦'
        }
        sendObj.subscribe(option)
        document.getElementsByClassName('subscribe-email-input')[0].placeholder = '请输入邮箱'
    }
    render () {
        return (
            <div id="sendcloud-embed-subscribe"></div>
        )
    }
}

export default SendCloud