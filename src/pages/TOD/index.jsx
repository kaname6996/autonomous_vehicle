import React, { Component } from 'react'
import './index.css'

export default class TOD extends Component {
    render() {
        return (
            <div className='tod'>
                <div className="container ">
                    <div className="row my-5 justify-content-center  mx-3 mx-md-0">
                    <h4>TOD的起源</h4>
                    <div className='txt py-3 shadow'>TOD（Transit Oriented Development）的概念最先起源於美國，是一種前瞻性減少汽車依賴和促進公共交通的方法。<br /> 
                    在現今，TOD廣泛地運用在許多都市交通策略上，並且引領著都市的發展及土地利用，除此之外，近年來都會區的人口密度不斷攀升，都市也隨著私人運具的普遍使用，造成都市蔓延等現象，而都市蔓延現象也進而產生了諸多問題，如全球暖化、氣候異常以及能源短缺等，Kushner與James 亦提及造成都市發展的混亂主因，來自於私人運具的大量運用，而這些問題也使的道路建設無法無限擴張。
                    </div> 
                            <img src="media/TOD_TOD.png" alt="" className=' my-3' />
                    </div>
                </div>
                <div className="container">
                    <div className="row my-5 justify-content-center mx-3 mx-md-0">
                    <h4>TOD造成的影響</h4>
                    <div className="col-12 px-0 pb-4">
                        TOD被視為提供多種好處，例如幫助塑造多中心都市和地區，緩解都市擴張，促進公共交通乘客增加騎自行車和步行的時數，同時適應經濟增長和創造更多都市的吸引力。<br /> 
                        TOD可以帶來更緊湊的都市，也可通過改變住戶的住宅選址和住房市場，有效地控制都市擴張等。以下則歸類出三個TOD帶來的影響：
                    </div>
                    <div className="col-12 col-md my-3 my-md-0 txt mx-2 py-3 shadow">
                        <h6>一、抑制使用私人載具的頻率</h6>
                        <div className='h6txt '>
                        TOD模式是土地利用和交通設施如軌道交通的整合等，促進交通設施得到有效的利用及發展，此外，也能抑制潛在的汽車交通需求，進而有效使居民對公共交通的依賴性提高，減緩私人載具被大量運用而生的問題，而TOD的出現也可避免土地利用過度集中，改善以汽車為中心的都市過度分散等問題。
                        </div>
                    </div>
                    <div className="col-12 col-md my-3 my-md-0 txt mx-2 py-3 shadow">
                        <h6>二、大眾運輸節點附近土地利用改變</h6>
                        <div className='h6txt '>
                        TOD是以大眾運輸車站為節點，結合了車站周邊的再開發計畫及新建設，再利用新計畫創造出大眾運輸車站附近良好的步行空間，並且讓車站周邊的土地有著比之前更為彈性及混合的使用，進而提升車站周邊的環境品質及車站的可及性。
                        </div>
                        </div>
                    <div className="col-12 col-md my-3 my-md-0 txt mx-2 py-3 shadow">
                    <h6>三、提高都市生活品質</h6>
                        <div className='h6txt '>
                        TOD以大眾運輸車站為節點，能夠改變都市居民的生活模式及交通方式，將都市居民從倚賴汽車及花費大量時間在通勤上面，轉變成利用步行、自行車及其他大眾運輸的生活方式，除此之外，也能增加可居性、改善交通安全與空氣品質等，進而提高都市生活品質。                        </div>                    
                    </div>
                    </div>
                </div>

            </div>
        )
    }
}
