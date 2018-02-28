import React, {Component} from 'react';
import Header from './components/header';
import Progress from './components/progress';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress:'-'
        };
    }
    componentDidMount(){
        // $('#player').jPlayer({
        //     ready: function () {
        //         $(this).jPlayer('setMedia',{
        //             mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
        //         }).jPlayer('play');
        //     },
        //     supplied: 'mp3',
        //     vmode:'window'
        // })
        // //
        // $('#player').bind($.jPlayer.event.timeupdate, (e)=>{
        //     this.setState({
        //         progress:Math.round(e.jPlayer.status.currentTime)
        //     })
        // })
    }

    componentWillUnMount() {
        $('#jPlayer').unbind($.jPlayer.event.timeupdate)
    }

    onButtonClick =(e)=>{
        console.log("eeeeeee",e,e.clientX,e.pageX);
    };


    render(){
        return(
            <div>
                <Header/>
                <Progress progress={this.state.progress}></Progress>

                <div style={{width:'500px',height:'10px',background:'#090',margin:"100px"}} onClick={this.onButtonClick}></div>
            </div>
        )
    }
}

export default Root;
