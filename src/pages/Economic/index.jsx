import React, { Component } from 'react'
import './index.css'

export default class Economic extends Component {

    state={model:[
        {id:1,name:'共享經濟',img:'media/Sharing Economic.jpg',txt1:`共享經濟（Sharing Economic）是互聯網時代具有革命力量的商業浪潮，它將人類社會的資源最大化利用，讓經濟型態從工業革命後的集體供需形式轉向個別匹配形式，帶來活化閒置資源、實時高效匹配、滿足個性化需求、全民共創共享等價值。`,txt2:'簡單來說共享經濟就是通過閒置資源共享給他人使用創造出其他價值，從中獲得經濟回報。共享經濟分為兩個部分，一部分是閒置，另一部分是共享。在共享經濟下，物品的所有權仍屬於所有者，只不過是將使用權讓渡給他人，並從中獲取回報。而從另一個角度來看，共享經濟並不創造資源，是將閒置的資源分享給需要的人，讓資源可以得到有效利用。'},
        {id:2,name:'汽車共享',img:'media/Zipcar.jpg',txt1:'汽車共享在歐美已發展出多種不同類型的汽車共享制度，其核心在於提供汽車的使用權及相關服務給消費者，而汽車的所有權則依然屬於服務提供者。汽車共享能帶來極大的效益，包括減少汽車產量與需求量、降低交通壓力、提升運輸效率、降低運輸成本、降低停車位需求等。',txt2:"以美國Zipcar公司估計一輛共享車可取代15-20輛的私家車，可減少消耗219加侖的石油，同時還可增加在地消費並減少興建停車場的需求。因此，近年來汽車共享制度在國際間快速成長，汽車共享極有可能成為21世紀最主要的移動方式。"},
        {id:3,name:'無人車共享',img:'media/carsharing.png',txt1:'隨著共享經濟的高速發展，以「共享」取代「擁有」的消費模式，正在改變人們的生活型態。其中，汽車共享的模式，因近年來環保意識的抬頭，迅速席捲全球。',txt2:'無人車共享會對汽車擁有率產生重大影響，可能會減少人與人接觸卻也可能會增加舒適度以及使用人數，特別是在市中心區域。通過共享無人車可以有效可以提高交通的效率，並有助於減少交通擁堵，能源消耗和污染。'},
    ]}


    render() {
        const{model}=this.state
        return (
            <div className='economic'>
               <div className="card-group my-5 mx-3 ">
                        {
                            model.map((c)=>{
                                return(
                                    <div className="card economicbox" key={c.id}>
                                        <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center',fontWeight:700}}>{c.name} </h5>
                                        <img src={c.img} className="card-img-top w-100 my-3" alt="..."/>
                                        <p className="card-text">{c.txt1}</p>
                                        <p className="card-text">{c.txt2}</p>

                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        )
    }
}
