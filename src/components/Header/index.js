import React from 'react'
import './style.less'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.switchLanguage = this.switchLanguage.bind(this)
        this.toggleLanguageMenu = this.toggleLanguageMenu.bind(this)
        this.state = {
            currentLanguage: this.props.currentLanguage === 'en' ? 'English' : '简体中文'
        }
    }

    switchLanguage(lang) {
        this.props.onLanguageChange(lang)
    }

    toggleLanguageMenu() {
        let languageMenuClass = document.getElementsByClassName('language-menu')[0].className
        let languageGlyphicon = document.getElementsByClassName('language-glyphicon')[0].className
        if (languageMenuClass.indexOf('hidden') > -1) {
            document.getElementsByClassName('language-menu')[0].className = languageMenuClass.replace('hidden', '')
            document.getElementsByClassName('language-glyphicon')[0].className = languageGlyphicon.replace('glyphicon-chevron-up', 'glyphicon-chevron-down')
        } else {
            document.getElementsByClassName('language-menu')[0].className += ' hidden'
            document.getElementsByClassName('language-glyphicon')[0].className = languageGlyphicon.replace('glyphicon-chevron-down', 'glyphicon-chevron-up')
        }
    }

    render() {
        let languageItem = ''
        if (this.props.currentLanguage === 'en') {
            languageItem = <li onClick={this.switchLanguage.bind(this, 'zh')}><a
                href="#">简体中文</a></li>
        } else {
            languageItem = <li onClick={this.switchLanguage.bind(this, 'en')}><a
                href="#">English</a></li>
        }
        return (
            <div className='container'>
                <header>
                    <img className='logo' src='/static/logo.png'/>
                    <div className="language-switch" onClick={this.toggleLanguageMenu}>
                        <span>{this.state.currentLanguage}</span>
                        <span className="glyphicon glyphicon-chevron-up language-glyphicon"> </span>
                        <ul className='language-menu hidden' onClick={this.stopPropagation}>
                            {languageItem}
                        </ul>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header
