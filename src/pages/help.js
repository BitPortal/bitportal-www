import React from 'react'
import Layout from '../components/Layout'
import {withIntl, Link} from '../i18n'
import '../styles/pages/help.less'
import PageBanner from "../components/PageBanner";

class HelpPage extends React.Component {
    constructor({props, data}) {
        super(props)
        let questionData = [], typeData = [], filteredTypeData = [];

        //add 'all' to filters
        typeData.push({title:'全部', status:'on'})

        data.allStrapiQuestion.edges.forEach((document) => {
            let item = document.node;
            //show items
            item.show = true

            if (item.type) {
                typeData.push({
                    title: item.type,
                    status: ''
                })
            }
            typeData.forEach((typeItem) => {
                let foundDuplicate = false
                filteredTypeData.forEach((subItem) => {
                    if (typeItem.title === subItem.title) {
                        foundDuplicate = true
                    }
                })
                if (!foundDuplicate) {
                    filteredTypeData.push(typeItem)
                }
            })
            questionData.push(item)
        })
        this.state = {
            questions: questionData,
            types: filteredTypeData
        }

        this.filtQuestions = this.filtQuestions.bind(this)
    }

    filtQuestions(filterItem) {
        let questionData = [], typeData = []
        this.state.types.forEach((type) => {
            if (type.title === filterItem.title && typeData.indexOf(type.title) === -1) {
                typeData.push({
                    title: type.title,
                    status: 'on'
                })
            } else {
                typeData.push({
                    title: type.title,
                    status: 'off'
                })
            }
        })
        this.state.questions.forEach((question) => {
            question.show = filterItem.title === '全部' || question.type === filterItem.title
            questionData.push(question)
        })
        this.setState({
            questions: questionData,
            types: typeData
        })
    }

    render() {
        return (
            <Layout>
                <div className="help-page" style={{paddingBottom: '54px'}}>
                    <PageBanner pageTitle={'nav.helpCenter'}/>
                    <div className="container">
                        <div className="help-content-wrap">
                            <ul className="help-page-filter">
                                {this.state.types.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <button className={item.status === 'on' && 'filter-active'}
                                                    onClick={() => this.filtQuestions(item)}>{item.title}</button>
                                        </li>
                                    )
                                })}</ul>
                            <ul>
                                {this.state.questions.map(item => {
                                    return (
                                        <li key={item.id} className={item.show ? '' : 'hidden'}>
                                            <Link to={`/question/${item.id}`}>{item.title}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withIntl(HelpPage)

export const pageQuery = graphql`
  query QuestionsQuery {
    allStrapiQuestion {
      edges {
        node {
          id
          title
          content
          type
        }
      }
    }
  }
`