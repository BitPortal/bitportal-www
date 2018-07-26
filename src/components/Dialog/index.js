import React from 'react'
import './style.less'

export default class Dialog extends React.Component{
    constructor(props) {
        super(props)
        this.hideDialog = this.hideDialog.bind(this)
    }
    hideDialog () {
        this.props.hideDialog()
    }
    componentDidMount () {
        // document.getElementsByTagName('body')[0].appendChild(document.getElementsByClassName('dialog')[0])

    }
    render () {
        return (
            <div className="dialog" onClick={this.hideDialog}>
                <div className="dialog-item" onClick={(e)=>{e.stopPropagation()}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}