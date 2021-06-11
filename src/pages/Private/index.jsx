import React, { Component } from 'react'

export default class Private extends Component {
    render() {
        return (
            <div className='private'>
                <div className="container ">
                    <div className="row">
                        <div className="col-12 my-5">
                        汽車的出現使人類在生活上有了重大的改變，交通運輸更加便利，讓人們可以到達更遠的地方，縮短交通時間以提高效率，但造成都市混亂的最大成因，亦源於私人運具被大量使用，道路做為形成都市發展的重要因素，帶動沿著道路蔓延發展的土地使用，進而發展成汽車導向都市，因此產生許多混亂的議題。
                        </div>
                        <div className="col-12 col-md-4 my-3 mb-md-5">
                            <div className="card h-100">
                            <img src="media/urban sprawl.jpeg"  alt="..." className='w-100'/>
                            <div className="card-body ">
                                <p className="card-text">
                                    <b>都市蔓延</b> <br />
                                    都市蔓延在傳統理論上被認定為是一種發生在都市邊緣的現象，以非連續、缺乏計畫或蛙躍式發展之空間型態。<br /> 在社會、經濟、教育與建設等快速開發下，使都市誘因增加，吸引人口到都市就業與居住，由於市中心開發飽和、汽車普及道路發達等原因造成土地使用由都市中心逐漸散佈發展到都市邊緣未開發的土地，此時郊區的人口成長比市中心來得高；而都市蔓延也被認為是都市化的過程，也是去中心化的一種發展，有別於市中心的高密度建築，都市蔓延是種毫無秩序、無止盡且較為分散的低密度土地使用發展。                                    </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-4 my-3 mb-md-5">
                            <div className="card h-100">
                            <img src="media/Environmental pollution.jpg"  alt="..." className='w-100'/>
                            <div className="card-body ">
                                <p className="card-text">
                                <b>環境汙染</b> <br />
                                根據2007年的「減少運輸二氧化碳排放報告」顯示，2003年的全球燃油消費排放二氧化碳中，交通運輸占34%，道路運輸占了絕大多數。而每年一輛小客車平均一年就能排出330kg的汙染物。<br /> 南京環境科學學報中更是指出了若以生活區、商業區、交通幹道區三者汙染狀況為比較，交通幹道區的汙染最為高。<br />另，根據環保署資料統計，空氣汙染除了造成人體健康上的危害，更隨著道路與都市不斷地向外增設及蔓延，空氣汙染勢必會造成更大面積的影響，甚至有可能會影響到氣候變遷。
                                    </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-4 my-3 mb-md-5">
                            <div className="card h-100">
                            <img src="media/Traffic jam.jpeg"  alt="..." className='w-100'/>
                            <div className="card-body ">
                                <p className="card-text">
                                <b>交通問題</b> <br />
                                由於汽車普及化，使道路擁擠、塞車，對人們的生活產生不小的影響，而車禍的產生更是嚴重影響，如美國每年有2,400萬個車禍發生，而全世界每天造成2,500個車禍死亡與5萬人受傷。<br /> 根據106年衛生福利部所公佈的國人十大死因，事故傷害位居第六名，事故傷害指非蓄意性傷害事件，如運輸事故、意外中毒、跌倒（落）、 火災及意外溺水等。然而運輸事故死亡人數為3,242人，佔事故傷害之46.5%；其中機動車事故死亡人數為3,005人，在運輸事故佔了非常高的比率，將近95%。
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
