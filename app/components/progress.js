/**
 * Created by admin on 2018/2/28.
 */
import React,{Component} from 'react';
require('./progress.less');

class Progress extends Component {

    render(){
        return(
            <div className="components-progress">
                { this.props.progress }s
            </div>
        )
    }
}

export default Progress;