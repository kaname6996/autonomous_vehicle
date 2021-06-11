import React, { Component } from 'react'
import './index.css'

export default class Type extends Component {
    render() {
        return (
            <div className='type'>
                <div className="container">
                    <div className="row my-5">
                            <div className="col-12 my-4 col-md-6 my-md-3  col-xl-3">
                            <div className="item h-100 w-100">
                                <div className="card w-100 h-100" >
                                <img src="media/同心圓理論.png" className="w-100 h-100" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">
                                        <b className='bcenter '> 同心圓理論</b> <br />
                                        Burgess在1925年提出同心圓地區內的都市土地利用和社會特徵相似，在發展上會從都市中心向外擴張，呈現放射狀，當中通勤者住宅區的居民會到中心商業區上班，主要會選擇較快速的交通網絡。                                        </p>
                                </div>
                            </div>                            
                            </div>
                            </div>

                            <div className="col-12 my-4 col-md-6 my-md-3  col-xl-3">
                            <div className="item h-100 w-100">
                                <div className="card w-100 h-100" >
                                <img src="media/楔形理論.png" className="w-100 h-100" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">
                                        <b className='bcenter '> 楔形理論</b> <br />
                                        Hoyt於1939年提出，此理論是同心圓理論的延伸，著重研究於住宅區位。當城市成長時，住宅區的區位位置會依照不同的社會經濟階層而有所不同，其中高品質之住宅會沿著最快速的路線往外擴張，此趨勢的形成因而產生了楔形的發展。                                    </p>
                                </div>
                            </div>                            
                            </div>
                            </div>

                            <div className="col-12 my-4 col-md-6 my-md-3  col-xl-3">
                            <div className="item h-100 w-100">
                                <div className="card w-100 h-100" >
                                <img src="media/輻射理論.png" className="w-100 h-100" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">
                                        <b className='bcenter '> 輻射發展理論</b> <br />
                                        此理論為同心圓理論的改良，因為同心圓理論沒有考慮到地形的影響，而交通路線會根據地形的不同而改變，所以運輸成本會有差別，而其中都市結構的發展型態會順著最佳的交通運輸路線往外擴展。                                    
                                        </p>
                                </div>
                            </div>                            
                            </div>
                            </div>
                            <div className="col-12 my-4 col-md-6 my-md-3  col-xl-3">
                            <div className="item h-100 w-100">
                                <div className="card w-100 h-100" >
                                <img src="media/多核心理論.png" className="w-100 h-100" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">
                                        <b className='bcenter '> 多核心理論</b> <br />
                                    由Chauncy Harris以及Edward Ullman在《The Nature of Cities》中提出的經濟模型，主張都市形成的不是單個核心，而是由幾個獨立的核心所組成，每個核心都像一個生長點。其提出的假設為：人們的汽車擁有量增加導致擁有更大的移動空間。
                                    </p>
                                </div>
                            </div>                            
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
