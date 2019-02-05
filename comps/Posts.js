import fetch from "isomorphic-unfetch";

const Posts = (props) => (
    <div>      
      {props.message && props.message.map(({message}) => (
          <React.Fragment><p>{message.message}</p><p>{message.date}</p></React.Fragment>
      ))}      
    </div>
);

Posts.getInitialProps = async function () {
    const res = await fetch('localhost:3000/posts');
    const message = await res.json();

    return {message};
};

export default Posts;
