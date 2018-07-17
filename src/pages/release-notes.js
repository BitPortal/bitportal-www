import React from 'react'

class ReleaseNotePage extends React.Component {
    render() {
        return (
            <div className="pure-text-container">
                 <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2 style={{textAlign: 'center'}}>更新日志</h2>
                                    <p className="lead"><strong>0.1.0 Beta</strong></p>
                                    <p>首次发布，支持EOS的投票，资产管理以及市场资讯。</p>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        )
    }
}

export default ReleaseNotePage