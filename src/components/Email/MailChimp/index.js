import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import {FormattedMessage} from 'react-intl'

const CustomForm = ({status, message, onValidated}) => {
    let email;
    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
        });
    return (
        <div>
            <input
                ref={node => (email = node)}
                type="email"
                placeholder="Your email"
            />
            <button onClick={submit}>
                <FormattedMessage id="subscribe"/>
            </button>
            {status === "sending" && (
                <div style={{color: "yellow", paddingTop: '8px'}}><FormattedMessage id="subscribe.sending"/></div>
            )}
            {status === "error" && (
                <div style={{color: "red", paddingTop: '8px'}}><FormattedMessage id="subscribe.error"/></div>
            )}
            {status === "success" && (
                <div style={{color: "green", paddingTop: '8px'}}><FormattedMessage id="subscribe.success"/></div>
            )}
        </div>
    );
};

class MailChimp extends React.Component {
    componentDidMount() {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('language') === 'zh') {
            document.getElementsByClassName('subscribe-form-wrap')[0].getElementsByTagName('input')[0].placeholder = '请输入您的邮箱'

            document.getElementsByClassName('subscribe-form-wrap')[0].getElementsByTagName('button')[0].innerText = '订阅'
        }
    }

    render() {
        return (
            <MailchimpSubscribe
                url={'https://bitportal.us18.list-manage.com/subscribe/post?u=74a5bedff058041c73ef4bb41&amp;id=f5c370464c'}
                render={({subscribe, status, message}) => (<div>
                        <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    </div>
                )}/>
        )
    }
}

export default MailChimp