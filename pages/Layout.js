import Head from 'next/head';
import NavBar from './components/navbar';
// import Link from 'next/link';



const Layout = props => {

    return(
        <div>
            <Head>
                <title>Greek Tv</title>
                <link href="https://bootswatch.com/4/solar/bootstrap.css" rel="stylesheet"/>
                <link href="styles.css" rel="stylesheet" />
            </Head>
            <NavBar />
            {props.children}    
        </div>
    )
}

export default Layout;