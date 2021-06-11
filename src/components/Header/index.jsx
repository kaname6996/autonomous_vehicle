import React, { Component } from 'react'
import {withRouter,Redirect,Route,NavLink} from 'react-router-dom'
import Home from '../../pages/Home'
import Type from '../../pages/Type'
import TOD from '../../pages/TOD'
import History from '../../pages/History'
import Private from '../../pages/Private'
import Level from '../../pages/Level'
import Economic from '../../pages/Economic'
import Advantage from '../../pages/Advantage'
import './index.css'

class Header extends Component {
    Goto=(e)=>{
        this.props.history.push(`/${e}`)
    }

    render() {
        return (
            <div className='header'>
                <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-header">
                <div className="container-fluid">
                <div className="navbar-brand" href="#" onClick={()=>this.Goto(`home`)} style={{cursor:'pointer'}}>
                <img src="media/標題車.png" alt="" width="50"  className="d-inline-block align-auto mx-3"/>
                無人車的介紹與研究
                </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <NavLink className="nav-link" to='/home'>首頁</NavLink>
                        <NavLink className="nav-link" to='/type'>都市結構型態</NavLink>
                        <NavLink className="nav-link" to='/history'>都市交通發展歷史</NavLink>
                        <NavLink className="nav-link" to='/tod'>TOD</NavLink>
                        <NavLink className="nav-link" to='/private'>私人載具的影響</NavLink>
                        <NavLink className="nav-link" to='/level'>無人車等級</NavLink>
                        <NavLink className="nav-link" to='/economic'>無人車的共用經濟</NavLink>
                        <NavLink className="nav-link" to='/advantage'>無人車的優勢</NavLink>
                        <Redirect to='/home'/>
                    </div>
                    </div>
                </div>
                </nav> 
                <Route path='/home' component={Home}/>
                <Route path='/type' component={Type}/>
                <Route path='/tod' component={TOD}/>
                <Route path='/history' component={History}/>
                <Route path='/private' component={Private}/>
                <Route path='/level' component={Level}/>
                <Route path='/economic' component={Economic}/>
                <Route path='/advantage' component={Advantage}/>
                </div>           
</div>
                    
        )
    }
}

export default withRouter(Header)