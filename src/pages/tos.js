import React from 'react'
import '../styles/pure-text-style.less'

class TosPage extends React.Component {
    render() {
        return (
            <div className="pure-text-container">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <section className="wrapper">
                                    <h1 style={{textAlign: 'center'}}>《BitPortal服务协议》</h1>
                                    <p className="strong center" style={{textAlign: 'center'}}>最近更新于：2018年5月24日</p>
                                    <p className="strong mb">尊敬的用户：</p>
                                    <p className="strong mb">感谢您选择BitPortal服务。《BitPortal服务协议》（以下简称“本协议”）由Dexlize Foundation PTE. LTD.（以下简称“Dexlize”或“我们”）和用户（以下简称“您”或“用户”）签订，本协议在您与Dexlize之间具有合同上的法律效力。</p>
                                    <p className="strong mb">Dexlize在此特别提醒您在使用BitPortal（以下简称“BitPortal”
                                        或“本软件”）之前，请认真阅读《BitPortal服务协议》及后文提到的相关协议，尤其是本协议规定的“免责及责任限制”等条款将以加粗的形式体现，确保您充分理解本协议中各条款，并自主考虑风险。</p>
                                    <section className="terms-area">
                                        <h2>一、 关于本协议的确认与接纳</h2>
                                        <ul className="strong">
                                            <li>1.
                                                您理解本协议及有关协议适用于BitPortal及BitPortal上Dexlize所自主开发和拥有的去中心化应用（简称“DApp”）（排除第三方开发的DApp）。
                                            </li>
                                            <li>2. 您下载BitPortal软件并创建或导入钱包，即视为您已经充分阅读并接受本协议全部条款，本协议立即生效，对双方具有约束力。
                                            </li>
                                            <li>3.
                                                本协议可由Dexlize随时更新，经修改的协议一经在BitPortal上公布，立即自动生效，恕不再另行通知。在Dexlize公布修改协议条款后，如果您不接受修改后的条款，请立即停止使用BitPortal，您继续使用BitPortal将被视为接受修改后的协议。
                                            </li>
                                            <li>4. 如果您未满18周岁，或者是无民事行为能力人或限制民事行为能力人，请在父母或监护人指导下使用BitPortal。</li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>二、 定义</h2>
                                        <ul>
                                            <li><span className="strong">1. BitPortal：</span>指由Dexlize基于EOS单链系统（及将来陆续支持的其他区块链系统）开发的区块链钱包，包括其他为方便用户使用区块链系统而开发的辅助工具。
                                            </li>
                                            <li>
                                                <p className="strong">2. 用户：</p>
                                                <ul>
                                                    <li className="strong">（1）用户必须是具备完全民事行为能力的自然人；</li>
                                                    <li>（2）若您为18周岁以下的未成年人使用BitPortal服务，需要在您父母或监护人的指导下使用BitPortal。无民事行为能力人使用BitPortal或限制民事行为能力人超过其民事权利或行为能力范围从事交易的，造成的一切后果，BitPortal有权要求您及您的父母或监护人负责。</li>
                                                </ul>
                                            </li>
                                            <li><span className="strong">3. 能力测评问卷：</span>指在您使用BitPortal之前（及在将来的使用过程中），需通过能力测评问卷以证明您了解区块链科技和知识，具备合理使用和管理去中心化钱包的基本能力。
                                            </li>
                                            <li><span className="strong">4. 创建或导入钱包：</span>指您使用BitPortal，确认履行本协议并创建或导入钱包的过程。
                                            </li>
                                            <li><span className="strong">5. 钱包密码：</span>指您在创建BitPortal钱包过程中，软件操作界面提示您填写的密码，该密码用于加密保护私钥。作为去中心化的应用，钱包密码不存储在您的这台移动设备或Dexlize的服务器，一旦丢失你需要借助明文私钥或助记词重置新密码。
                                            </li>
                                            <li><span className="strong">6. 信息提示：</span>BitPortal软件操作界面涉及的信息提示内容，建议用户按照相关步骤进行操作。
                                            </li>
                                            <li><span className="strong">7. 特定用户：</span>指按照中国法律法规及政策规定必须要配合Dexlize履行个人信息披露义务的用户。
                                            </li>
                                            <li><span className="strong">8. 私钥：</span>由256位随机字符构成，是用户拥有并使用数字代币的核心。
                                            </li>
                                            <li><span className="strong">9. 公钥：</span>由私钥借助密码学原理单向推导生成，并用以生成区块链数字钱包地址，数字钱包地址即为公开收款地址。
                                            </li>
                                            <li><span className="strong">10. 助记词：</span>符合区块链BIP39
                                                行业标准，由随机算法生成的12（或15/18/21/24）个有序单词组成。是私钥的易记录表现形式，方便用户备份保管。
                                            </li>
                                            <li><span className="strong">12. 数字代币：</span>指BitPortal目前支持的数字代币种类，包括但不限于EOS、ETH、DGD等。
                                            </li>
                                            <li><span className="strong">13. 资料：</span>指BitPortal上“浏览”、“市场”等版块的文章等资料，这些资料均为Dexlize所有，未经授权不得转载。
                                            </li>
                                            <li><span className="strong">14. 个人信息：</span>指以电子或者其他方式记录的能够单独或者与其他信息结合识别用户个人身份的各种信息，包括但不限于自然人的姓名、出生日期、身份证件号码、个人生物识别信息、住址、电话号码、银行卡号、邮件地址、钱包地址、移动设备信息、操作记录、交易记录等，但不包括用户的钱包密码、私钥、助记词、Keystore。
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>三、 服务内容</h2>
                                        <ul>
                                            <li><span className="strong">1. 创建或导入钱包。</span>对BitPortal支持的数字代币，您可以使用BitPortal生成新钱包或导入相关区块链系统的其它钱包工具生成的兼容钱包。
                                            </li>
                                            <li><span className="strong">2. 转账、收款。</span>您可以使用BitPortal的转账、收款功能进行数字代币的管理，即运用私钥进行电子签名，对相关区块链的账本进行修改。转账是指付款方利用收款方的区块链地址进行转账操作，实际的转账、收款行为均在相关区块链系统（而非BitPortal）发生。
                                            </li>
                                            <li><span className="strong">3. 行情查看。</span>您可以使用BitPortal查看所提供的数字代币汇率价格。BitPortal通过抓取相应的数字代币汇率信息并展示在BitPortal中的“市场”版块。
                                            </li>
                                            <li><span className="strong">4. 管理数字资产。</span>您可以使用BitPortal添加、保管并移除BitPortal所支持的数字代币（ETH除外）。
                                            </li>
                                            <li><span className="strong">5. 浏览DApp。</span>用户通过在BitPortal上的链接，可以跳转至DApp并使用该DApp（包括Dexlize自己的DApp和第三方DApp）提供的服务。
                                            </li>
                                            <li><span className="strong">6. 交易记录。</span>我们将通过区块链系统拷贝您全部或部分的交易记录。但交易记录以区块链系统的记载为准。
                                            </li>
                                            <li><span className="strong">7. 暂停服务。</span>您知悉基于区块链系统交易“不可撤销”的属性，我们不能为您暂停或撤销转账交易等操作，但在一定情况下，我们可以暂停或者限制某位用户对BitPortal软件的操作。
                                            </li>
                                            <li>8. 其他Dexlize认为有必要提供的服务。</li>
                                        </ul>
                                        <p className="strong">用户接受Dexlize提供的上述服务时应了解以下常见问题：</p>
                                        <ul className="strong">
                                            <li>1.
                                                秉承着区块链的去中心化特点，并为了保护用户的数字代币安全，Dexlize提供的是去中心化服务，大大区别于银行业金融机构。用户了解，Dexlize不提供以下服务：
                                                <ul>
                                                    <li>（1）存储用户的钱包密码（即用户创建/导入钱包时设置的密码）、私钥、助记词、Keystore；</li>
                                                    <li>（2）找回用户的钱包密码、私钥、助记词、Keystore；</li>
                                                    <li>（3）冻结钱包；</li>
                                                    <li>（4）挂失钱包；</li>
                                                    <li>（5）恢复钱包；</li>
                                                    <li>（6）交易回滚。</li>
                                                </ul>
                                            </li>
                                            <li>2.
                                                由于Dexlize不提供上述服务，因此用户应当自行保管含有BitPortal的移动设备、备份BitPortal、备份钱包密码、助记词、私钥及Keystore。如用户遗失移动设备、删除且未备份BitPortal、删除且未备份钱包、钱包被盗或遗忘钱包密码、私钥、助记词、Keystore，Dexlize均无法还原钱包或找回钱包密码、私钥、助记词、Keystore；如用户进行交易时误操作（例如输错转账地址），Dexlize亦无法取消交易。
                                            </li>
                                            <li>3.
                                                Dexlize和BitPortal所能够提供的数字代币管理服务并未包括所有已存在的数字代币，请勿通过BitPortal操作任何BitPortal不支持的数字代币。
                                            </li>
                                            <li>4.
                                                BitPortal仅是用户的数字代币管理工具，并非交易所或交易平台。虽然本协议将多次提及“交易”，其行为泛指用户使用BitPortal进行的转账和收款操作，这与交易所或交易平台上进行的“交易”有本质区别。
                                            </li>
                                            <li>5.
                                                BitPortal上集成的DApp包括Dexlize自主拥有的DApp和第三方平台提供的DApp。对于第三方平台提供的DApp，BitPortal仅为用户进入DApp提供区块链浏览器。用户在第三方DApp上接受服务或进行交易前应自行判断和评估该第三方DApp提供的服务或交易是否存在风险。
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>四、 您的权利义务</h2>
                                        <h4>（一）创建或导入钱包</h4>
                                        <ul>
                                            <li><span className="strong">1. 创建或导入钱包：</span>您有权在您的移动设备上通过BitPortal创建和/或导入钱包，有权设定钱包的钱包密码等信息，并有权通过BitPortal应用程序，使用自己的钱包在区块链上进行转账和收款等交易。
                                            </li>
                                            <li><span className="strong">2. 身份验证：</span>按照有关法律法规和政策要求，特定用户在使用BitPortal提供的有关服务时，应当按照BitPortal的提示及时完成相关身份验证，要求您提交包括但不限于您的姓名、身份证号码、手机号码、银行卡号信息等个人信息。否则该特定用户将无法使用有关服务，因特定用户拖延造成的损失由您自行承担。
                                            </li>
                                            <li>3. Dexlize可能为不同的终端设备开发不同的软件版本，您应当根据实际需要选择下载合适的版本进行安装。<span
                                                className="strong">如果您从未经合法授权的第三方获取本软件或与本软件名称相同的安装程序，Dexlize将无法保证该软件能否正常使用，也无法保证其安全性，因此造成的损失由您自行承担。</span>
                                            </li>
                                            <li className="strong">4.
                                                本软件新版本发布后，旧版软件可能无法使用。Dexlize不保证旧版软件的安全性、继续可用性及提供相应的客户服务。请您随时核对并下载最新版本。
                                            </li>
                                        </ul>
                                        <h4>（二）使用</h4>
                                        <ul>
                                            <li>1.<span
                                                className="strong">用户应自行妥善保管移动设备、钱包密码、私钥、助记词、Keystore等信息。Dexlize不负责为用户保管以上信息。因您遗失移动设备、主动或被动泄露、遗忘钱包密码、私钥、助记词、Keystore或遭受他人攻击、诈骗等所引起的一切风险、责任、损失、费用应由您自行承担。</span>
                                            </li>
                                            <li>2.<span>&nbsp;</span><span className="strong">遵循信息提示。</span>您了解并同意遵循BitPortal对您做出的信息提示，按照信息提示的内容进行操作，否则，由此引起的一切风险、责任、损失、费用等应由您自行承担。
                                            </li>
                                            <li>3.<span>&nbsp;</span><span
                                                className="strong">您知悉并理解BitPortal没有义务对链接的第三方DApp服务或交易履行尽职调查义务，您应当理性做出投资决策并自主承担相应的投资风险。</span>
                                            </li>
                                            <li>4.<span>&nbsp;</span><span className="strong">积极完成身份验证。</span>当BitPortal合理认为您的交易行为或交易情况出现异常的，或认为您的身份信息存在疑点的，或BitPortal认为应核对您身份证件或其他必要文件的情形时，请您积极配合BitPortal核对您的有效身份证件或其他必要文件，及时完成相关的身份验证。
                                            </li>
                                            <li>
                                                <p className="strong">5. 转账。</p>
                                                <ul className="strong">
                                                    <li>（1）您知悉对于BitPortal服务中您可使用的日计转账限额和笔数，可能因为您使用该转账服务时所处的国家/地区、监管要求、转账目的、BitPortal风险控制、身份验证等事由而不同。</li>
                                                    <li>（2）您理解基于区块链操作的“不可撤销”属性，当您使用BitPortal转账功能时，您应当自行承担因您操作失误而导致的后果（包括但不限于因您输错转账地址、您自身选择转账节点服务器的问题）。</li>
                                                    <li>（3）您知悉在使用BitPortal服务时，以下情况的出现可能导致转账“交易失败”或“打包超时”：
                                                        <ul className="deepest-list">
                                                            <li>a) 钱包余额不足；</li>
                                                            <li>b) 交易矿工费不足；</li>
                                                            <li>c) 区块链执行合约代码失败；</li>
                                                            <li>d) 超出监管部门、BitPortal或法律法规规定的付款额度；</li>
                                                            <li>e) 网络、设备等技术故障；</li>
                                                            <li>f) 区块链网络拥堵、故障等原因引起交易被抛弃；</li>
                                                            <li>g) 您的地址或交易对方地址被识别为特殊地址, 如高风险地址、交易所地址、ICO
                                                                地址、Token地址等。
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>（4）您知悉BitPortal仅向您提供转账工具，在您使用BitPortal完成转账后，Dexlize即完成了当次服务的所有义务，Dexlize对其他纠纷争议，不负担任何义务。</li>
                                                </ul>
                                            </li>
                                            <li>6.<span>&nbsp;</span><span className="strong">合法合规。</span>您知悉在BitPortal进行操作时或利用BitPortal上的DApp进行交易时，您应当遵循有关法律法规、国家政策的要求。
                                            </li>
                                            <li>7.<span>&nbsp;</span><span className="strong">公告通知。</span>BitPortal会以网站公告、电子邮件、发送短信、电话、消息中心信息、弹窗提示或客户端通知等方式向您发送通知，例如通知您交易进展情况，或者提示您进行相关操作，请您及时予以关注。
                                            </li>
                                            <li>
                                                <p className="strong">8. 服务费用与纳税义务：</p>
                                                <ul>
                                                    <li>（1）BitPortal暂时不向您收取任何形式的服务费或手续费，将来需对某些服务进行收费时将另行约定或公布规则；</li>
                                                    <li className="strong">（2）您使用BitPortal进行转账时应支付矿工费，金额由您自行决定。矿工费由相关区块链系统收取；</li>
                                                    <li className="strong">（3）您知悉在特定情况下，因为您所处的环境及网络状态不稳定，导致您的转账操作未完成时，亦会被相关区块链系统收取矿工费；</li>
                                                    <li>（4）您因在BitPortal进行交易而发生的所有应纳税负及其它方面的费用均由您负责支付。</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>五、 风险提示</h2>
                                        <ul className="strong">
                                            <li>1.
                                                您了解并知悉，由于数字代币领域的法律法规政策尚未健全，该领域的数字代币可能会产生无法兑现、技术不稳定等重大风险。且数字代币的价格波动幅度远高于其他金融资产。我们谨慎提醒您应当根据自身财务状况和风险偏好，理性选择持有或处置任何一种数字代币。BitPortal提供的行情查看功能仅系抓取部分交易所的数字代币汇率信息的搜索结果，并不表示为最新行情或最佳报价。
                                            </li>
                                            <li>2.
                                                在使用BitPortal服务时，若您或您的相对方未遵从本协议或相关网站说明、交易、支付页面中之操作提示、规则，BitPortal并不保证交易会顺利完成，且BitPortal不承担损害赔偿责任。若发生前述情形，而款项已先行入账您的或您的交易方的BitPortal钱包或第三方钱包，您理解区块链操作具有的“不可逆”属性，以及相关交易具有“不可撤销”的特征，由您及您的相对方自行承担相应的风险后果。
                                            </li>
                                            <li>3.
                                                在您使用BitPortal集成的第三方DApp服务或进行交易时，为了您的利益，Dexlize建议您仔细阅读本协议及BitPortal提示，了解交易对象及产品信息，谨慎评估风险后再采取行动。所有您在第三方DApp进行的交易行为系您的个人行为，有约束力的合同关系在您和您的相对方之间建立，与BitPortal无关。BitPortal对因您的交易行为所引起的一切风险、责任、损失、费用不承担任何责任。
                                            </li>
                                            <li>4. 您在交易过程中应当自行判断对方是否为完全民事行为能力人并自行决定是否与对方进行交易或转账给对方等，且您自行承担与此相关的所有风险。
                                            </li>
                                            <li>5.
                                                在转账过程中，如果出现“交易失败”、“打包超时”等类似的异常信息提示时，您应通过相关区块链系统的官方途径或其他的区块链查询工具进行再次确认，以避免重复转账；否则，由此所引起的一切损失和费用应由您自行承担。
                                            </li>
                                            <li>6.
                                                您理解当您在BitPortal上创建或导入钱包之后，您的Keystore、私钥、助记词等信息仅存储在当前的这台移动设备中，不存储在BitPortal或Dexlize的服务器上。您可以按照BitPortal提供的操作指南采取同步钱包等方式更换移动设备。但若您未保存或备份钱包密码、私钥、助记词、Keystore等信息且在您移动设备丢失的情况下，您的数字代币将因此丢失，Dexlize无法为您找回，您需自行承担相应损失。若您在导出、保存或备份钱包密码、私钥、助记词、Keystore等信息的时候泄密，或保存或备份上述信息的设备或服务器被黑客攻击或控制等情况下，您的数字代币将因此丢失，Dexlize无法为您找回，您需自行承担相应损失。
                                            </li>
                                            <li>7.
                                                我们建议您在创建或导入钱包时对您钱包的钱包密码、私钥、助记词及Keystore等信息做好安全备份。我们提请您注意，请不要采用以下备份方式：截图、邮件、记事本、短信、微信、QQ等电子备份方式。我们建议您在纸质记事本上抄写助记词和Keystore等信息，同时您亦可将电子数据保管至密码管理器。
                                            </li>
                                            <li>8. 我们建议您在安全的网络环境中使用BitPortal，确保您的移动设备没有越狱或Root， 以避免可能存在的安全隐患</li>
                                            <li>9. 请您在使用我们的服务过程中，警惕非BitPortal官方的诈骗行为。一旦发现此类行为，我们鼓励您第一时间告知我们。</li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>六、 服务的变更、中断、终止</h2>
                                        <ul className="strong">
                                            <li>1.
                                                您同意Dexlize为保证自主业务经营权可以暂时提供部分服务功能，或于将来暂停部分服务功能或开通新的服务功能。当任何功能减少或者增加或者变化时，只要您仍然使用Dexlize提供的服务，表示您仍然同意本协议或者本协议修正后的条款。
                                            </li>
                                            <li>2.
                                                为保护您的数字代币安全，尽量避免您在不具备区块链基础知识的前提下使用BitPortal而产生的误操作或由此带来的风险，您必须先通过能力测评问卷并达到Dexlize所要求的合格分数才能使用BitPortal服务，否则，Dexlize有权限制或拒绝提供部分或全部的服务功能。
                                            </li>
                                            <li>3. 您理解存在如下情形时，Dexlize将暂停提供服务：
                                                <ul>
                                                    <li>（1）因设备、区块链系统维修、升级、故障和通信中断等技术原因而中断业务；</li>
                                                    <li>（2）因台风、地震、海啸、洪水、停电、战争或恐怖袭击等不可抗力因素，病毒、木马、黑客攻击、系统不稳定或政府行为等原因，造成Dexlize系统不能提供服务或Dexlize合理认为继续提供服务会有较大风险的；</li>
                                                    <li>（3）发生Dexlize无法控制或合理预见的其他情形。</li>
                                                </ul>
                                            </li>
                                            <li>3. 当您出现如下情况时，Dexlize可单方面中止或终止您使用BitPortal的部分或全部功能:
                                                <ul>
                                                    <li>（1）用户死亡；</li>
                                                    <li>（2）盗用他人的钱包信息或移动设备；</li>
                                                    <li>（3）填写个人信息时提供虚假信息、在回答能力测评问卷时非本人操作；</li>
                                                    <li>（4）拒绝Dexlize为提升BitPortal功能而发起的强制更新操作；</li>
                                                    <li>（5）将BitPortal用于违法或犯罪活动；</li>
                                                    <li>（6）妨碍其他用户正常使用；</li>
                                                    <li>（7）伪称Dexlize的工作人员或管理人员；</li>
                                                    <li>（8）攻击、侵入、更改或以任何其他方式威胁Dexlize计算机系统的正常运作；</li>
                                                    <li>（9）利用BitPortal宣传垃圾广告；</li>
                                                    <li>（10）散布谣言，损害Dexlize和BitPortal商誉；</li>
                                                    <li>（11）违法行为，其他违反本协议的行为，及Dexlize合理认为应当暂停功能的情形。</li>
                                                </ul>
                                            </li>
                                            <li>4. 当您与Dexlize之间的服务关系变更、中断、终止时，您仍有权在合理时间内导出您钱包等信息。</li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>七、 您合法使用Dexlize服务的承诺</h2>
                                        <ul className="strong">
                                            <li>1.
                                                您应遵守中华人民共和国相关法律法规及您所居住的国家或地区的法律法规，不得将BitPortal用于任何非法目的，也不得以任何非法方式使用Dexlize服务。
                                            </li>
                                            <li>2. 您不得利用BitPortal从事违法或犯罪的行为，包括但不限于：
                                                <ul>
                                                    <li>（1）反对宪法所确定的基本原则，危害国家安全、泄漏国家秘密、颠覆国家政权、破坏国家统一的；</li>
                                                    <li>（2）从事任何违法犯罪行为，包括但不限于洗钱、非法集资等；</li>
                                                    <li>（3）通过使用任何自动化程序、软件、引擎、网络爬虫、网页分析工具、数据挖掘工具或类似工具，接入Dexlize服务、收集或处理Dexlize所提供的内容，干预或试图干预任何用户或任何其他方式接入Dexlize服务的行为；</li>
                                                    <li>（4）提供赌博资讯或以任何方式引诱他人参与赌博；</li>
                                                    <li>（5）侵入他人BitPortal钱包盗取数字代币；</li>
                                                    <li>（6）进行与交易对方宣称的交易内容不符的交易，或不真实的交易；</li>
                                                    <li>（7）从事任何侵害或可能侵害BitPortal服务系统、数据之行为；</li>
                                                    <li>（8）其他违法以及Dexlize有正当理由认为不适当的行为。</li>
                                                </ul>
                                            </li>
                                            <li>3.
                                                您理解并同意，如因您违反有关法律（包括但不限于海关及税务方面的监管规定）或者本协议之规定，使Dexlize遭受任何损失、受到任何第三方的索赔或任何行政管理部门的处罚，您应对Dexlize进行赔偿，包括合理的律师费用。
                                            </li>
                                            <li>4. 您承诺按时缴纳Dexlize的服务费用（如有），否则Dexlize有权暂停或中止对您提供的服务。</li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>八、 隐私条款</h2>
                                        <ul className="strong">
                                            <li>1. Dexlize十分重视对用户隐私的保护，相关隐私保护政策请参考Dexlize公布并不时更新的《BitPortal隐私政策》。</li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>九、 免责及责任限制</h2>
                                        <ul className="strong">
                                            <li>1. Dexlize仅对本协议中所列明的义务承担责任。</li>
                                            <li>2.
                                                您理解和同意，在法律所允许的范围内，Dexlize只能按照现有的技术水平和条件提供服务。因下列原因导致BitPortal无法正常提供服务，Dexlize不承担责任：
                                                <ul>
                                                    <li>（1）BitPortal系统停机维护或升级；</li>
                                                    <li>（2）因台风、地震、洪水、雷电或恐怖袭击等不可抗力原因；</li>
                                                    <li>（3）您的移动设备软硬件和通信线路、供电线路出现故障的；</li>
                                                    <li>（4）您操作不当或未通过Dexlize授权或认可的方式使用Dexlize服务的；</li>
                                                    <li>（5）因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、银行等原因或政府行为等原因；</li>
                                                    <li>（6）非因Dexlize的原因而引起的任何其它原因。</li>
                                                </ul>
                                            </li>
                                            <li>3. Dexlize对以下情形不承担责任：
                                                <ul>
                                                    <li>（1）因用户遗失移动设备、删除且未备份BitPortal、删除且未备份钱包、钱包被盗或遗忘钱包密码、私钥、助记词、Keystore而导致的数字代币丢失；</li>
                                                    <li>（2）因用户自行泄露钱包密码、私钥、助记词、Keystore，或借用、转让或授权他人使用自己的移动设备或BitPortal钱包，或未通过Dexlize官方渠道下载BitPortal应用程序或其他不安全的方式使用BitPortal应用程序导致的数字代币丢失；</li>
                                                    <li>（3）因用户误操作（包括但不限于您输错转账地址、您自身选择转账节点服务器的问题）导致的数字代币丢失；</li>
                                                    <li>（4）因用户不理解区块链技术的性质而进行误操作导致的数字代币丢失；</li>
                                                    <li>（5）因时间滞后、区块链系统不稳定等原因导致Dexlize拷贝用户在区块链上的交易记录发生偏差；</li>
                                                    <li>（6）用户在第三方DApp上操作产生的风险和后果。</li>
                                                </ul>
                                            </li>
                                            <li>4.
                                                您理解BitPortal仅作为您数字代币管理的工具。Dexlize不能控制第三方DApp提供的产品及服务的质量、安全或合法性，信息的真实性或准确性，以及相对方履行其在与您签订的协议项下的各项义务的能力。所有您在第三方DApp进行的交易行为系您的个人行为，有约束力的合同关系在您和您的相对方之间建立，与BitPortal无关。Dexlize提醒您应该通过自己的谨慎判断确定登录DApp及相关信息的真实性、合法性和有效性。您与任何第三方交易所产生的风险亦应由您自行承担。
                                            </li>
                                            <li>5.
                                                Dexlize可能同时为您及您的交易对手方提供服务，您同意对Dexlize可能存在的该等行为予以明确豁免任何实际或潜在的利益冲突，并不得以此来主张Dexlize在提供服务时存在法律上的瑕疵，也不因此而加重Dexlize的责任或注意义务。
                                            </li>
                                            <li>6. Dexlize不提供以下形式的保证：
                                                <ul>
                                                    <li>（1）Dexlize服务将符合您的全部需求；</li>
                                                    <li>（2）您经由Dexlize服务取得的任何技术、产品、服务、资讯将符合您的期望；</li>
                                                    <li>（3）Dexlize从第三方交易所抓取的数字代币市场交易行情等信息的及时性、准确性、完整性、可靠性做出保证；</li>
                                                    <li>（4）您在BitPortal上的交易各方会及时履行其在与您达成的交易协议中各项义务。</li>
                                                </ul>
                                            </li>
                                            <li>7. 在任何情况下，Dexlize对本协议所承担的违约赔偿责任总额不超过1）0.1个以太币；或2）人民币500元，以较高的为准。</li>
                                            <li>8.
                                                您理解BitPortal仅作为用户管理数字代币、显示交易信息的工具，Dexlize不提供法律、税务或投资建议等服务。您应当自行向法律、税务、投资方面的专业人士寻求建议，且您在使用我们服务过程中所遭受的投资损失、数据损失等，Dexlize概不负责。
                                            </li>
                                            <li>9. 您理解根据有关中国政策法规的要求，我们可能不时更改我们的用户准入标准，限定向某一特定群体提供服务的范围和方式等。</li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>十、 完整协议</h2>
                                        <ul>
                                            <li>1. 本协议由《BitPortal服务协议》、《BitPortal隐私政策》及Dexlize不时公布的各项规则（包括“帮助中心”的内容）组成。
                                            </li>
                                            <li>2. 本协议部分内容被有管辖权的法院认定为违反或无效的，不因此影响其他内容的效力。</li>
                                            <li>3.
                                                本协议的任何译文版本仅为方便用户而提供，无意对本协议的条款进行修改。如果本协议的中文版本与非中文版本之间存在冲突，应以中文版本为准。
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>十一、 知识产权保护</h2>
                                        <ul>
                                            <li>1. BitPortal系Dexlize开发并拥有知识产权的应用程序。
                                                BitPortal中显示的任何内容（包括本协议、公告、文章、视频、音频、图片、档案、资讯、资料、商标或标识）的知识产权归Dexlize或第三方权利人所有。用户仅可为持有和管理数字代币之目的使用BitPortal应用程序及其中的内容。未经Dexlize或第三方权利人的事先书面同意，任何人不得擅自使用、修改、反向编译、复制、公开传播、改变、散布、发行或公开发表上述应用程序及内容。
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>十二、 法律适用与争议解决</h2>
                                        <ul>
                                            <li>1.
                                                本协议及其修订版之效力、解释、变更、执行与争议解决均适用中华人民共和国法律，如无相关法律规定，则应当适用国际商业惯例和（或）行业惯例。
                                            </li>
                                            <li>2. 若您和Dexlize之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，任何一方可提交Dexlize所在地有管辖权的人民法院管辖。
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>十三、 其他</h2>
                                        <ul>
                                            <li>1. 如您是中华人民共和国以外用户，您需全面了解并遵守您所在司法辖区与使用Dexlize服务所有相关法律、法规及规则。</li>
                                            <li>2. 您在使用Dexlize服务过程中，如遇到任何问题，您可以通过在BitPortal提交反馈等方式联系我们。</li>
                                            <li>3. 您可以在BitPortal中查看本协议。 Dexlize鼓励您在每次访问BitPortal时都查阅Dexlize的服务协议。</li>
                                            <li>4. 本协议自2017年9月26日起适用。</li>
                                        </ul>
                                    </section>
                                    <p className="strong last">本协议未尽事宜，您需遵守Dexlize不时更新的公告及相关规则。</p>
                                    <p className="strong right last">Dexlize Foundation PTE. LTD.</p>
                                </section>
                                <section className="wrapper">
                                    <h1>《BitPortal隐私政策》</h1>
                                    <p className="strong center">最近更新于：2017年9月26日</p>
                                    <p className="strong mb">尊敬的用户：</p>
                                    <p className="strong mb">Dexlize Foundation PTE. LTD.（以下简称“Dexlize”或“我们”）尊重并保护用户（以下简称“您”或“用户”）的隐私，您使用BitPortal时，Dexlize将按照本隐私政策（以下简称“本政策”）收集、使用您的个人信息。</p>
                                    <p className="strong mb">Dexlize建议您在使用本产品（以下简称“BitPortal”）之前仔细阅读并理解本政策全部内容,
                                        针对免责声明等条款在内的重要信息将以加粗的形式体现。本政策有关关键词定义与Dexlize《BitPortal服务协议》保持一致。</p>
                                    <p className="strong mb">本政策可由Dexlize在线随时更新，更新后的政策一旦公布即代替原来的政策，如果您不接受修改后的条款，请立即停止使用BitPortal，您继续使用BitPortal将被视为接受修改后的政策。经修改的政策一经在BitPortal上公布，立即自动生效。</p>
                                    <p className="strong mb">您知悉本政策及其他有关规定适用于BitPortal及BitPortal上Dexlize所自主拥有的DApp。</p>
                                    <section className="terms-area">
                                        <h2>一、 我们收集您的哪些信息</h2>
                                        <p className="mb">请您知悉，我们收集您的以下信息是出于满足您在BitPortal服务需要的目的，且我们十分重视对您隐私的保护。在我们收集您的信息时，将严格遵守“合法、正当、必要”的原则。且您知悉，若您不提供我们服务所需的相关信息，您在BitPortal的服务体验可能因此而受到影响。</p>
                                        <ul>
                                            <li>1. 我们将收集您的移动设备信息、操作记录、交易记录、钱包地址等个人信息。</li>
                                            <li>2. 为满足您的特定服务需求，我们将收集您的姓名、银行卡号、手机号码、邮件地址等信息。</li>
                                            <li className="strong">3. 您知悉：您在BitPortal
                                                上的钱包密码、私钥、助记词、Keystore并不存储或同步至Dexlize服务器。Dexlize不提供找回您的钱包密码、私钥、助记词、Keystore的服务。
                                            </li>
                                            <li>4.
                                                除上述内容之外，您知悉在您使用BitPortal特定功能时，我们将在收集您的个人信息前向您作出特别提示，要求向您收集更多的个人信息。如您选择不同意，则视为您放弃使用BitPortal该特定功能。
                                            </li>
                                            <li>5. 当您跳转到第三方DApp后，第三方DApp会向您收集个人信息。BitPortal不持有第三方DApp向您收集的个人信息。</li>
                                            <li>6. 在法律法规允许的范围内，Dexlize可能会在以下情形中收集并使用您的个人信息无需征得您的授权同意：
                                                <ul>
                                                    <li className="strong">（1） 与国家安全、国防安全有关的；</li>
                                                    <li className="strong">（2） 与公共安全、公共卫生、重大公共利益有关的；</li>
                                                    <li className="strong">（3） 与犯罪侦查、起诉、审判和判决执行等有关的；</li>
                                                    <li className="strong">（4） 所收集的个人信息是您自行向社会公众公开的；</li>
                                                    <li className="strong">（5）
                                                        从合法公开披露的信息中收集您的个人信息，如合法的新闻报道，政府信息公开等渠道；
                                                    </li>
                                                    <li className="strong">（6） 用于维护服务的安全和合规所必需的，例如发现、处理产品和服务的故障；
                                                    </li>
                                                    <li className="strong">（7） 法律法规规定的其他情形。</li>
                                                </ul>
                                            </li>
                                            <li>7. 我们收集信息的方式如下：
                                                <ul>
                                                    <li>（1）
                                                        您向我们提供信息。例如，您在“个人中心”页面中填写姓名、手机号码或银行卡号，或在反馈问题时提供邮件地址，或在使用我们的特定服务时，您额外向我们提供。
                                                    </li>
                                                    <li>（2）
                                                        我们在您使用BitPortal的过程中获取信息，包括您移动设备信息以及您对BitPortal的操作记录等信息；
                                                    </li>
                                                    <li>（3） 我们通过区块链系统，拷贝您全部或部分的交易记录。但交易记录以区块链系统的记载为准。</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>二、 我们如何使用您的信息</h2>
                                        <ul>
                                            <li>1. 我们通过您移动设备的唯一序列号，确认您与您的钱包的对应关系。</li>
                                            <li>2. 我们将向您及时发送重要通知，如软件更新、服务协议及本政策条款的变更。</li>
                                            <li>3. 我们在BitPortal的“系统设置”中为您提供“指纹登录”选项，让您方便且更安全地管理您的数字代币。</li>
                                            <li>4. 我们通过收集您公开的钱包地址和提供的移动设备信息来处理您向我们提交的反馈。</li>
                                            <li>5. 我们收集您的个人信息进行Dexlize内部审计、数据分析和研究等，以期不断提升我们的服务水平。</li>
                                            <li>6. 依照《BitPortal服务协议》及Dexlize其他有关规定，Dexlize将利用用户信息对用户的使用行为进行管理及处理。</li>
                                            <li>7. 法律法规规定及与监管机构配合的要求。</li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>三、 您如何控制自己的信息</h2>您在BitPortal中拥有以下对您个人信息自主控制权：
                                        <ul>
                                            <li>1.
                                                您可以通过同步钱包的方式，将您的其他钱包导入BitPortal中，或者将您在BitPortal的钱包导入到其他数字代币管理钱包中。BitPortal将向您显示导入钱包的信息。
                                            </li>
                                            <li>2. 您知悉您可以通过“资产”版块内容修改您的数字代币种类、进行转账及收款等活动。</li>
                                            <li>3. 您知悉在BitPortal“我”的版块您可以自由选择进行如下操作：
                                                <ul>
                                                    <li>（1） 在“联系人”中，您可以随时查看并修改您的“联系人”；</li>
                                                    <li>（2） 在“系统设置”中，您可以选择不开启“指纹登录”选项，即您可以选择不使用苹果公司提供的Touch
                                                        ID验证服务；
                                                    </li>
                                                    <li>（3）
                                                        在“个人中心”中，您并不需要提供自己的姓名、手机号码、银行卡等信息，但当您使用特定服务时，您需要提供以上信息；
                                                    </li>
                                                    <li>（4）
                                                        在“提交反馈”中，您可以随时向我们提出您对BitPortal问题及改进建议，我们将非常乐意与您沟通并积极改进我们的服务。
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>4.
                                                您知悉当我们出于特定目的向您收集信息时，我们会提前给予您通知，您有权选择拒绝。但同时您知悉，当您选择拒绝提供有关信息时，即表示您放弃使用BitPortal的有关服务。
                                            </li>
                                            <li>5. 您知悉，您及我们对于您交易记录是否公开并没有控制权，因为基于区块链交易系统的开源属性，您的交易记录在整个区块链系统中公开透明。
                                            </li>
                                            <li>6.
                                                您知悉当您使用BitPortal的功能跳转至第三方DApp之后，我们的《BitPortal服务协议》、《BitPortal隐私政策》将不再适用，针对您在第三方DApp上对您个人信息的控制权问题，我们建议您在使用第三方DApp之前详细阅读并了解其隐私规则和有关用户服务协议等内容。
                                            </li>
                                            <li>7. 您有权要求我们更新、更改、删除您的有关信息。</li>
                                            <li className="strong">8. 您知悉我们可以根据本政策第一条第6款的要求收集您的信息而无需获得您的授权同意。</li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>四、 我们可能分享或传输您的信息</h2>
                                        <ul>
                                            <li>1.
                                                Dexlize在中华人民共和国境内收集和产生的用户个人信息将存储在中华人民共和国境内的服务器上。若Dexlize确需向境外传输您的个人信息，将在事前获得您的授权，且按照有关法律法规政策的要求进行跨境数据传输，并对您的个人信息履行保密义务。
                                            </li>
                                            <li className="strong">2. 未经您事先同意，Dexlize不会将您的个人信息向任何第三方共享或转让，但以下情况除外：
                                                <ul>
                                                    <li>（1） 事先获得您明确的同意或授权；</li>
                                                    <li>（2） 所收集的个人信息是您自行向社会公众公开的；</li>
                                                    <li>（3） 所收集的个人信息系从合法公开披露的信息中收集，如合法的新闻报道，政府信息公开等渠道；</li>
                                                    <li>（4） 与Dexlize的关联方共享，我们只会共享必要的用户信息，且受本隐私条款中所声明的目的的约束；</li>
                                                    <li>（5） 根据适用的法律法规、法律程序的要求、行政机关或司法机关的要求进行提供；</li>
                                                    <li>（6） 在涉及合并、收购时，如涉及到个人信息转让，Dexlize将要求个人信息接收方继续接受本政策的约束。</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>五、 我们如何保护您的信息</h2>
                                        <ul>
                                            <li>1.
                                                如Dexlize停止运营，Dexlize将及时停止继续收集您个人信息的活动，将停止运营的通知公告在BitPortal上，并对所持有的您的个人信息在合理期限内进行删除或匿名化处理。
                                            </li>
                                            <li>2.
                                                为了保护您的个人信息，Dexlize将采取数据安全技术措施，提升内部合规水平，增加内部员工信息安全培训，并对相关数据设置安全访问权限等方式安全保护您的隐私信息。
                                            </li>
                                            <li>3.
                                                我们将在BitPortal“消息中心”中向您发送有关信息安全的消息，并不时在BitPortal“帮助中心”版块更新钱包使用及信息保护的资料，供您参考。
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>六、 对未成年人的保护</h2>我们对保护未满18周岁的未成年人做出如下特别约定：
                                        <ul>
                                            <li>1. 未成年人应当在父母或监护人指导下使用Dexlize相关服务。</li>
                                            <li>2.
                                                我们建议未成年人的父母和监护人应当在阅读本政策、《BitPortal服务协议》及我们的其他有关规则的前提下，指导未成年人使用BitPortal。
                                            </li>
                                            <li>3. BitPortal将根据国家相关法律法规的规定保护未成年人的个人信息的保密性及安全性。</li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>七、 免责声明</h2>
                                        <ul className="strong">
                                            <li>1.
                                                请您注意，您通过BitPortal接入第三方DApp后，将适用该第三方DApp发布的隐私政策。该第三方DApp对您个人信息的收集和使用不为Dexlize所控制，也不受本政策的约束。Dexlize无法保证第三方DApp一定会按照Dexlize的要求采取个人信息保护措施。
                                            </li>
                                            <li>2. 您应审慎选择和使用第三方DApp，并妥善保护好您的个人信息，Dexlize对其他第三方DApp的隐私保护不负任何责任。</li>
                                            <li>3.
                                                Dexlize将在现有技术水平条件下尽可能采取合理的安全措施来保护您的个人信息，以避免信息的泄露、篡改或者毁损。Dexlize系利用无线方式传输数据，因此，Dexlize无法确保通过无线网络传输数据的隐私性和安全性。
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="terms-area">
                                        <h2>八、 其他</h2>
                                        <ul>
                                            <li>1. 如您是中华人民共和国以外的用户，您需全面了解并遵守您所在司法辖区与使用Dexlize服务所有相关法律、法规及规则。</li>
                                            <li>2. 您在使用Dexlize服务过程中，如遇到任何有关个人信息使用的问题，您可以通过在BitPortal提交反馈等方式联系我们。</li>
                                            <li>3. 您可以在BitPortal中查看本政策及Dexlize其他服务规则。<span
                                                className="strong">我们鼓励您在每次访问BitPortal时都查阅Dexlize的服务协议及隐私政策。</span>
                                            </li>
                                            <li>4.
                                                本政策的任何译文版本仅为方便用户而提供，无意对本政策的条款进行修改。如果本政策的中文版本与非中文版本之间存在冲突，应以中文版本为准。
                                            </li>
                                            <li>5. 本政策自<span className="back-color">2017年9月26日</span>起适用。</li>
                                        </ul>
                                    </section>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default TosPage