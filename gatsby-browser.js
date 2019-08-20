/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 // You can delete this file if you're not using it

exports.onClientEntry = () => {
    let language = null;
    if(typeof window !== 'undefined'){
        let originalPath = location.pathname;
        if (localStorage.getItem('language')){
            language = localStorage.getItem('language')
        }else {
            language = (navigator.language || navigator.browserLanguage).slice(0, 2) || 'en'
        }

        if(language !== 'en' || language !== 'zh'){
            language = 'en'
        }

        localStorage.setItem('language', language)

        const urlLanguage = location.href.indexOf('/zh') > -1 ? 'zh' : 'en'
        if(urlLanguage !== language){
            location.href = `${language === 'en' ? '/' : '/zh' + originalPath}`
        }
    }
}