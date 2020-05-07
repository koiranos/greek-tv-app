import Layout from './Layout';

const About =  () => {
    return (
        <Layout>
            <div class="container mt-5">
                <h1>How to Create a Streaming Web Application</h1>
                <h3>Introduction</h3>
                <p className="lead">
                    I am always facinated about exploring new ideas and finding ways to build your thoughts into applications that exite you. 
                    This is the best way to learn because you put yourself in a situation that is out of your sefty zone.
                    Having this mindset will help you achive more milestones than those you have acknowledged.

                    This tutorial is the result of such instance. I will present you all the steps and difficulties that I faced in building this application. 
                </p>  
                <h3>What is Next.js</h3>
                <p className="lead">
                    Next.js is a React framework that was created by Zeist. It is widely used for its unique indergration of React and the ability to simplify the routing proccess of an application.
                    This means that it is easier to put all your pages in a folder and let Next do its work to help you navigate to them, than make all the routing ends on your own.
                </p>
                <h3>The Players</h3>
                <p className="lead">
                    In order to be able to display any kind of video content throught a web page we have to use the the HTML5 video tag.
                    There are a few drawbacks for our situation though.
                    The video tag in most popular browsers does not support m3u8 files or the HLS protocol (Http Live Streaming) in general. The only browser that has this capability is Safari.
                    Another drawback is that we are using React and Next.js to our web application wich makes it a little bit harder to embed videos in html.
                    For these reasons I chose react-hls-player and react-player.
                    I could use one of them for my application but following the initial notion to use different approaches lead me to use them both.
                </p>
                <h3>Styling</h3>
                <p className="lead">
                    For the styling of the page I used bootstrap and bootswatch. 
                    Bootstrap is the most popular toolkit for responsive design. It contains HTML, CSS, JS snipets and prototypes that help to create a visually pleasing applications with the current stantards.
                    Bootswatch is a collection of themes that use bootstrap in order to create fast and beautifull web pages.
                    For my project I have used the solar theme, which can be found here. 
                </p>
            </div>
        </Layout>
    )
}

export default About;