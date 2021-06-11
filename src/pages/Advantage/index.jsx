import React, { Component } from 'react'
import './index.css'

export default class Advantage extends Component {

    state={advantage:[
        {id:1,name:'減少人為事故',img:'media/accident.jpeg',txt:'無人車最大優勢是以雷達、光學雷達、GPS及電腦視覺等技術感測其環境，透過物聯網相互連結將可減少人為事故衍生之交通問題。'},
        {id:2,name:'減少交通阻塞',img:'media/Traffic.jpeg',txt:'普通人開車通常需要與前車保持約1.5秒的時間距離，無人車可透過電腦控制減少時間距離，並且解決交通堵塞等相關問題。'},
        {id:3,name:'改善都市空間結構',img:'media/Urban structure.jpg',txt:'無人車將會減少都市停車用地的使用，減少停車場所需的土地數量，將土地從停車用地重新分配到其他用途如住宅、商業或綠地等。'},
        {id:4,name:'縮短乘車成本',img:'media/traffic light.jpeg',txt:'透過物聯網的技術，我們將可以降低昂貴的交通號誌和信號系統等設備相關費用，以及搭車需要支付的司機費用、人力成本等等。'},
    ]}


    render() {
        const{advantage}=this.state
        return (
            <div className='advantage'>
                <div className="container ">
                    <div className="row">
                    <div className="row row-cols-1 row-cols-md-2 g-4 my-3">
                                {
                                    advantage.map((c)=>{
                                        return(
                                            <div className="col" key={c.id}>
                                                <div className="card h-100">
                                                <div className="card-body">
                                                    <h5 className="card-title" style={{textAlign:'center',fontWeight:700}}>{c.name}</h5>
                                                    <p className="card-text">{c.txt}</p>
                                                    <img src={c.img} className="card-img-top w-100 " alt="..."/>
                                                </div>
                                                </div>
                                        </div>
                                        )
                                    })
                                }
                        </div>                    
                        </div>
                </div>
            </div>
        )
    }
}
