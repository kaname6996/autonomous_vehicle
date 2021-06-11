import React, { Component } from 'react'
import './index.css'

export default class Level extends Component {
    state={level:[
            {id:1,name:'Level 0－手動駕駛',img:'media/等級零.jpg',txt:'目前路上約2015年以前的車款，多屬於此等級車輛，當時自動駕駛尚未普及，駕駛行駛中僅有「定速」功能可使用，遇到狀況時，仍必須自己手動減速、煞車。'},
            {id:2,name:'Level 1－輔助駕駛',img:'media/自動緊急煞車系統.jpg',txt:'這是最入門的自動駕駛系統，僅能啟動「轉向操控」或「速度控制」其中之一，無法同時操控；此時車款開始安裝雷達、攝影機來協助判斷，與前車是否保持距離(無法煞停/起步)，以及車輛是否維持在車道內(警示提醒不介入)，緊急時有自動緊急煞車系統(AEB)。'},
            {id:3,name:'Level 2－部分自動駕駛',img:'media/steering wheel.jpeg',txt:'在等級2含有多項駕駛輔助系統，駕駛人主要控制車輛，但可以減少操作車輛負擔，例如主動式巡航定速結合自動跟車和車道偏離警示，而自動緊急煞停系統透過盲點偵測和前方防撞系統的部分技術結合。'},
            {id:4,name:'Level 3－有條件自動駕駛',img:'media/TESLA.png',txt:'等級3為無人駕駛階段的開始，駕駛者仍是必要的，在特定條件下司機可以不須操作車輛進行自動駕駛，但當汽車偵測到需要駕駛人控制時，會立即回復讓駕駛人接管其後續控制，因此駕駛者需要隨時準備好接管車輛駕駛。'},
            {id:5,name:'Level 4－高度自動駕駛',img:'media/台灣自駕巴士WinBus.jpg',txt:'在條件許可下讓車輛完整自駕，駕駛人不須介入操控，此車可以依照設定之道路規則行駛，但是無人駕駛技術可能僅限於高速或者車輛較少的路面上使用。'},
            {id:6,name:'Level 5－全自動駕駛',img:'media/artificial intelligence.jpeg',txt:'任何情況下皆可以自動駕駛，不受環境所限定。等級5為完全的自動化駕駛，可執行所有與安全有關之重要功能，包括沒有人在車上時的情形，完全不須受駕駛意志所控，可以自行決策，此等級車子內部需要有方向盤、煞車和油門。'},
        ]}

    render() {
        const{level}=this.state

        return (
            <div className='level'>
                    <div className="container ">
                        <div className="row">
                            <div className="col mt-5 bigger">
                            美國國家公路交通安全管理局（NHTSA）於2016年提出無人車之不同等級分類，此定義根據國際自動機工程師學會（SAE）依照自動化的程度不同編修而成，從level 0無自動駕駛到level 5完全自動駕駛。
                            國內在2017年引進level 4無人車，於高雄駁二特區、臺灣大學水源校區等地開放民眾試乘，並於2017年8月清晨在臺北實際道路測試，未來全臺第一座無人車測試場域將位於臺北士林北投科學園區，開啟了臺灣與無人車間的第一次接觸。
                            </div>
                        </div>
                        </div>

                    {
                        level.map((c)=>{
                            return(
                                <div className="card my-3 h-100" key={c.id}>
                                <div className="row g-0 ">
                                    <div className="col-md-4 my-auto">
                                    <img src={c.img} alt="..." className='w-100 h-100 '/>
                                    </div>
                                    <div className="col-md-8 my-auto">
                                    <div className="card-body ">
                                        <h5 className="card-title">{c.name}</h5>
                                        <p className="card-text">{c.txt}</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                
                            )
                        })
                    }
            </div>
        )
    }
}
