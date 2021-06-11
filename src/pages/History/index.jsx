import React, { Component } from 'react'
import './index.css'

export default class History extends Component {
    render() {
        return (
            <div className='history'>
                <div className="container ">
                    <div className="row">
                        <div className="col-12 my-5">都市中的交通運輸與土地使用一直以來皆是相互影響著，而這樣的關係進而形成了「交通運輸與土地使用連結的都市模式（urban form of transport and land use connection,UTLC）」。西元1880至1990年代間，交通運輸與土地使用所架構的都市模式大致可區分為以下四種模式：</div>
                        <div className="col-12 my-3 col-md-6 my-md-5 h-100">
                            <h6>一、傳統步行城市（traditional walking city，簡稱TWC）</h6> 
                            <img src="media/TWC.jpg" alt="" className='w-100 h-75' />
                            <p className='p-2 h-100 mx-lg-5  '>1880年以前，交通運輸與土地使用的整合，是以步行形成的土地使用型態，人們用何種方式移動與交通運輸工具有著密切的關係，除此之外，多項研究認為，步行將社會、健康、經濟及環境效益作為短距離內良好的運輸模式。而都市規模之大小決定於「步行的運輸系統」，進而形成當時所謂的「傳統步行都市（TWC）」。 </p>
                            </div>
                        <div className="col-12 my-3 col-md-6 my-md-5 h-100">
                            <h6>二、工業化軌道運輸城市（industrial transit city，簡稱ITC）：</h6> 
                            <img src="media/ITC.png" alt="" className='w-100 h-75' />
                            <p className='p-2 h-100 mx-lg-5 '>1880至1920年代間，鐵路軌道運輸興起後，旅運速度提高，旅行距離也大幅增長。軌道的高運輸量特性，使郊區連結市區的鐵路與電軌車增加，進而促使都市呈現放射狀的向外蔓延，而這些「軌道運輸與土地使用」之整合變化，也形成了所謂的「工業化軌道運輸都市（ITC）」。</p>
                            </div>
                        <div className="col-12 my-3 col-md-6 my-md-5 h-100">
                            <h6>三、汽車導向發展城市（automobile oriented development city，簡稱AOD）：</h6> 
                            <img src="media/AOD.png" alt="" className='w-100 h-75' />
                            <p className='p-2 h-100 mx-lg-5 '>1920至1970年代，汽車製造的速度快速成長，汽車持有率也持續攀升，形成都市內部及都市間的主要運輸工具。汽車的快速成長，更伴隨著道路的大量興建，各種建設沿著道路旁集中 ，Dena Belzer及Gerald Autler於2002的研究也指出第二次世界大戰後許多國家因放棄了鐵路系統，使得公共汽車成為當時主要的運輸工具。 </p>
                            </div>
                        <div className="col-12 my-3 col-md-6 my-md-5 h-100">
                            <h6>四、大眾運輸導向發展城市（transit-oriented development, 簡稱TOD）：</h6>
                            <img src="media/永續.png" alt="" className='w-100 h-75' />
                            <p className='p-2 h-100 mx-lg-5 '>1990年代後出現的永續都市的概念，包含了更環保的大眾交通運輸工具推廣和車站周邊土地的有效利用與活化再生，現在TOD的概念即是永續發展和智慧型成長概念的衍生。而後，TOD又經歷了兩種階段，為大眾運輸關聯發展城市（transit-related development city）以及大眾運輸導向發展城市（transit-oriented development)。</p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
