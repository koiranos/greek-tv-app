import Layout from './Layout';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

let channelNames = [
    {   name: 'Ant 1',
        url: "https://antennalivesp-lh.akamaihd.net/i/live_1@715138/index_800_av-p.m3u8"},
    {   name: 'Alpha',
        url: "https://alphalive-i.akamaihd.net/hls/live/682300/live/high/prog_index.m3u8"},
    {   name: 'Mega',
        url: "https://c98db5952cb54b358365984178fb898a.msvdn.net/live/S86713049/gonOwuUacAxM/playlist.m3u8"},
    {   name: 'Star',
        url: "https://cdnapisec.siliconweb.com/p/713821/sp/0/playManifest/entryId/1_fp7fyi3j/format/applehttp/protocol/https/flavorParamId/0/manifest.m3u8"},
    {   name: 'Skai',
        url: "https://youtu.be/CmqbY_Gzsdo"},
    {   name: 'Ert 1',
        url: "https://ert-live.siliconweb.com/media/ert_1/ert_1medium.m3u8"},
    {   name: 'Ert 2',
        url: "https://ert-live.siliconweb.com/media/ert_2/ert_2medium.m3u8"},
    {   name: 'Ert Sports',
        url: "https://ert-live.siliconweb.com/media/ert_sports/ert_sportshigh.m3u8"},
];

const StyledDiv = styled.div`
    width: 580px !important;
    margin: 0 auto !important;
`;
const StopButtonDiv = styled.div`
    width: 580px !important;
    margin: 0 auto !important;
    button {
        width: 100%;
    }
`;

const StyledPlayer = styled.div`
    width: fit-content;
    margin: 0 auto;
`;

export default class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeChannel: '',
            url: null,
            playing: true,
            controls: true,
            volume: 0.8,
            muted: false,
            loaded: 0,
            pip: false,
            light: false
        }
        this.playChannel = this.playChannel.bind(this);
        this.clearPlayer = this.clearPlayer.bind(this);
        this.changeChannel = this.changeChannel.bind(this);
    }

    // create the channel buttons function
    createButtons = () => {
        let buttons = [];
        channelNames.forEach(channel => {
            buttons.push(<button key={channel.name} type="button" className = "btn btn-outline-info mt-2 mr-2" onClick={this.changeChannel}>{channel.name}</button>)
        });
        return buttons;
    }

    // set active channel name
    changeChannel = event => {
        // this.clearPlayer();
        console.log(`name: ${this.state.name}, url: ${this.state.url}, playing: ${this.state.playing}`)
        let name = event.target.textContent
        let ch = channelNames.filter(channel => channel.name === name);
        this.setState({
            activeChannel: event.target.textContent,
            url: ch[0].url,
            playing: true,
            loaded: 0,
            pip: false,
        })
    }

    // clear player
    clearPlayer = () => {
        this.setState({ 
            url: '',
            playing: false 
        });

    }

    // player reference
    ref = player => {
        this.player = player;
    }

    // Player creation and use
    playChannel = () => {
        if(this.state.activeChannel != '') {
            return (
                <StyledPlayer>
                    <ReactPlayer 
                        ref = {this.ref}
                        className = "react-player"
                        width = "1200px"
                        height = "675px"
                        url = {this.state.url}
                        pip = {this.state.pip}
                        light = {this.state.light}
                        playing = {this.state.playing}
                        controls = {this.state.controls}
                        volume = {this.state.volume}
                        muted = {this.state.muted} />
                </StyledPlayer>
            )            
        }else {
            return <p className = "text-center">Please select a channel!</p> 
        }
    }

    render() {
        return (
            <Layout>     
                <StyledDiv>
                    {this.createButtons()}
                </StyledDiv>
                <hr className="hr"/>
                <StopButtonDiv>
                    <button key="one" type="button" className = "btn btn-primary" onClick={this.clearPlayer}>Stop Channel</button>
                </StopButtonDiv>
                <hr className="hr"/>
                {this.playChannel()}
            </Layout>
        )
    }
}