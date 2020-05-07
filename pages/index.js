import Layout from './Layout';
import ReactHLS from 'react-hls-player';
// import Channels from './components/Channels';

let channels = {
    Ant1: "https://antennalivesp-lh.akamaihd.net/i/live_1@715138/index_800_av-p.m3u8",
    Alpha: "https://alphalive-i.akamaihd.net/hls/live/682300/live/high/prog_index.m3u8"  
}

const pageContent = {
    title: 'Greek Tv',
    subTitle: 'Web Application',
    description: <div className="card-body"><p className="card-text lead">This is an application to directly watch the major Greek TV channels.
    React Framework along with Next.js were used to create the main application. The streaming service for each channel is given by the m3u8 file type apart from one that is using youtube live streaming.</p>
    <p className="lead">For this reason two React Players were used, the react-hls-player from devchort and the react-player from CookPete.<br/>
    The styling of the page was done with bootstrap and the solaris bootswatch theme.</p>
    <p className= "lead">A detailed tutorial regarding the building proccess is provided in the About page.<br/>
    Thank you for your visit.</p></div> ,
    stepOneTitle: 'Step 1: Click to watch!',
    stepOneDescription: <div class="card-body"><p class="card-text lead">Click on a channel from the menu to start watching.</p>
    <p className="lead">There is a Channels page that contains a different approach of the application.<br/><br/><br/></p></div>,
    stepTwoTitle: 'Step 2: Enjoy!',
    stepTwoDescription: <div class="card-body"><p class="card-text lead">For the individual pages, there is no need for anything else to do.</p>
    <p className="lead">For channels page, you have to select a channel from the availiable buttons.
    There is also a stop channel button to stop the streaming proccess.</p></div>

}

class Index extends React.Component {
    render() {
        return (
            <Layout className="Layout">
                <div className="container">
                    
                    <div className="card text-white border-secondary mt-5 mb-5">
                        <div className="card-header">
                            <h1 className="display-3">{pageContent.title} | <span className="display-6">{pageContent.subTitle}</span></h1>
                        </div>
                        {pageContent.description}
                        <div className="card-footer">
                            <a className="btn btn-primary btn-lg" href="#" role="button">Git Repository</a>
                        </div>
                    </div>

                    <h2>How to watch:</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card text-white border-secondary mb-3">
                                <div class="card-header">
                                    <h4 class="card-title">{pageContent.stepOneTitle}</h4>
                                </div>
                                {pageContent.stepOneDescription}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="card text-white border-secondary mb-3">
                                <div class="card-header">
                                    <h4 class="card-title">{pageContent.stepTwoTitle}</h4>
                                </div>
                                {pageContent.stepTwoDescription}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

// class Index extends React.Component {
//     render() {
//         return (
//             <Layout className="Layout">
//                 <div className="container">
                    
//                     <div className="card text-white border-secondary mt-5 mb-5">
//                         <div className="card-header">
//                             <h1 className="display-3">Greek Tv | <span className="display-6">Web Application</span></h1>
//                         </div>
//                         <div className="card-body">
//                             <p className="card-text">This is an application to directly watch Greek Tv channels.</p>
//                             <p className="card-text">It was made with Next.js, a bootswatch template theme and React HLS Player.</p>
//                             <p className="card-text">A tutorial for how it was build can be found on the About page.</p>
//                         </div>
//                         <div className="card-footer">
//                             <a className="btn btn-primary btn-lg" href="#" role="button">Git Repository</a>
//                         </div>
//                     </div>

//                     <h2>How to watch:</h2>
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="card text-white border-secondary mb-3">
//                                 <div class="card-header">
//                                 <h4 class="card-title">Step 1: Click a Channel</h4>
//                                 </div>
//                                 <div class="card-body">
//                                     <p class="card-text">Navigate through the availiable channels on the menu bar.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div class="card text-white border-secondary mb-3">
//                                 <div class="card-header">
//                                 <h4 class="card-title">Step 2: Enjoy!</h4></div>
//                                 <div class="card-body">
//                                     <p class="card-text">You do not have to click anything else. Playback starts automatically</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Layout>
//         )
//     }
// }


export default Index;