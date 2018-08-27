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

                                    <div>
                                        <p className="lead"><strong>V0.2.0</strong></p>
                                        相对较大的版本更新，完善诸多功能。
                                        <ul>
                                            <li>1. 优化导入账户流程</li>
                                            <li>2. 修复和完善Discovery页面</li>
                                            <li>3. 增加帮助中心</li>
                                            <li>4. 添加新建账户功能（通过邀请码）</li>
                                            <li>5. 修复bug和提升兼容性</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="lead"><strong>v0.1.5
                                        </strong></p>
                                        <ul>
                                            <li>1. 增加转账功能</li>
                                            <li>2. 增加历史记录</li>
                                            <li>3. 修复细节</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="lead"><strong>V0.1.4</strong></p>
                                        <ul>
                                            <li>1. 更新了投票界面，增加节点详情</li>
                                            <li>2. 用户界面调整，加上诸多优化</li>
                                            <li>3. 添加实时内存价格</li>
                                            <li>4. bug修复等</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="lead"><strong>Beta v0.1.3</strong></p>
                                        <ul>
                                            <li>* 添加了EOS系统资源管理功能，支持CPU，Net，Memory的显示，抵押和买卖</li>
                                            <li>* 修复iOS中discovery显示顺序的问题</li>
                                            <li>* 修复部分android机器兼容问题</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="lead"><strong>Beta V0.1.2</strong></p>
                                        <ul>
                                            <li>* 支持EOS主网账户导入和投票</li>
                                            <li>* 优化细节，简化未完成功能</li>
                                            <li>* 翻译</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="lead"><strong>Beta V0.1.1</strong></p>
                                        <ul>
                                            <li>* 完善细节，修复Bug</li>
                                            <li>* 投票支持多选</li>
                                            <li>* 其他</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="lead"><strong>0.1.0 Beta</strong></p>
                                        <ul>
                                            <li>* 首次发布，支持EOS的投票，资产管理以及市场资讯。</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        )
    }
}

export default ReleaseNotePage