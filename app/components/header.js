/**
 * Created by admin on 2018/2/28.
 */
import React,{Component} from 'react';
import './header.less';

class Header extends Component {

    render(){
        return(
            <div className="components-header row">
                <img src="/static/images/logo.png" width="40px" style={{float:"left"}} className="-col-auto"/>
                <h1 className="caption">React Music Player</h1>
            </div>
        )
    }
}

export default Header;