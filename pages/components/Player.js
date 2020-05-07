import ReactHLS from 'react-hls-player';

class Player extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <ReactHLS url={this.props.url} autoplay="true" width="1600" height="900"/>
                </div>
            </div>
            
        )
    }
}

export default Player;