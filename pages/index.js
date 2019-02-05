import Layout from "../comps/Layout.js";
import fetch from "isomorphic-unfetch";
//import Posts from "../comps/Posts.js";

const Index = (props) => (
    <Layout>
        {props.messages.map((message) => (
            <React.Fragment key={message._id}>
                <p >{message.message}</p>
                <p>{message.date}</p>
            </React.Fragment>
        ))}
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch('http://localhost:3000/posts');
    const messages = await res.json();

    console.log({messages});
    
    return {messages};
};


export default Index;
