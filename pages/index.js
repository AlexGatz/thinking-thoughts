import Layout from "../comps/Layout.js";
import fetch from "isomorphic-unfetch";
import Posts from "../comps/Posts.js";

const Index = (props) => (
    <Layout>
        <Posts posts={props.messages}/>
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch('http://localhost:3000/posts');
    const messages = await res.json();

    console.log({messages});
    
    return {messages};
};


export default Index;
