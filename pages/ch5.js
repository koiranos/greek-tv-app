import Layout from './Layout';
import Player from 'react-player';

const ch1 = () => {
    return (
        <Layout>
            <Player url = "https://youtu.be/CmqbY_Gzsdo" playing width="1600px" height="900px"/>
        </Layout>
    )
}

export default ch1;