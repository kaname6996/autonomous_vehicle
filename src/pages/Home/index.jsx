import React, { Component } from 'react'
import './index.css'
export default class index extends Component {

    constructor(props) {
        super(props);
        this.homeoutpic=[]
        this.link=[]
    }

    state={list:[
        {id:1,h4:'都市結構型態',p:'同心圓理論→楔形理論→輻射理論→多核心理論',img:'media/都市結構型態.jpg',goto:'type'},
        {id:2,h4:'都市交通發展歷史',p:'傳統步行→工業化軌道運輸→汽車導向發展→永續城市',img:'media/都市交通發展歷史.jpg',goto:'history'},
        {id:3,h4:'大眾運輸導向發展城市(TOD)',p:'TOD的起源與發展、造成的影響',img:'media/TOD.jpg',goto:'tod'},
        {id:4,h4:'私人載具為都市帶來的影響',p:'都市蔓延、交通問題、環境汙染',img:'media/私人載具.jpg',goto:'private'},
        {id:5,h4:'無人車：無人車等級',p:'從無自動駕駛到完全的自動駕駛',img:'media/等級.jpg',goto:'level'},
        {id:6,h4:'無人車：無人車共用經濟',p:'共享經濟、汽車共用、無人車共用',img:'media/共享.jpg',goto:'economic'},
        {id:7,h4:'無人車：無人車優勢',p:'減少人為事故、減少交通阻塞、改善城市結構',img:'media/優勢.jpg',goto:'advantage'},
],
show:false,
homeoutpic:'',
goto:''
}

    Goto=(e)=>{
        this.props.history.push(`/${e}`)
    }

    examine=(key)=>{
        const{homeoutpic,link}=this
        //console.log(name[key])
       // console.log(h4name.innerText)
        this.setState({show:true})
        // console.log(homeoutpic[key].src)
        this.setState({homeoutpic:homeoutpic[key].src})
        //console.log(link[key].id)
        this.setState({goto:link[key].id})
        
    }
    turnOff=()=>{
        this.setState({show:false})
    }

    // 點esc關閉
    closehomeout=(event)=>{
        if(event.keyCode === 27) {
            this.setState({show:false})
        }
    }
    componentDidMount(){
        document.addEventListener("keydown", this.closehomeout);
        }
    componentWillUnmount(){
        document.addEventListener("keydown", this.closehomeout);
    }


    render() {
        const{list,show,homeoutpic,goto}=this.state
        return (
            <div className='home'>
                <ul className="timeline">
                    {
                        list.map((c,key)=>{
                            return(
                                <li key={c.id} id={c.goto} onClick={()=>this.examine(key)} ref={ref => (this.link[key]= ref)}>
                                    <div>
                                        <h4>{c.h4}</h4>
                                        <p>{c.p}</p>
                                        <img src={c.img} alt="..." style={{display:'none'}} ref={ref => (this.homeoutpic[key]= ref)} />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={show?'homeout p-4':'homeoutx'} onClick={this.turnOff}>
                    <div className='homeoutClose mx-2'>
                        <i className="fas fa-chevron-circle-up mx-3" style={{cursor:'pointer'}} onClick={()=>this.Goto(`${goto}`)} title='詳細資料'></i>
                        <i className="fas fa-times-circle" onClick={this.turnOff} style={{cursor:'pointer'}} title='關閉'></i>
                        </div>
                    <img src={homeoutpic} alt="" />
                </div>
            </div>
        )
    }
}
