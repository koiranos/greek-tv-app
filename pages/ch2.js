import Layout from './Layout';
import Player from './components/Player';


const ch1 = () => {
    return (
        <Layout>
            <Player url = "https://alphalive-i.akamaihd.net/hls/live/682300/live/high/prog_index.m3u8" />
        </Layout>
    )
}

export default ch1;