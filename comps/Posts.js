import fetch from "isomorphic-unfetch";

const Posts = (props) => (
    <div>      
      {props.message.map(({message}) => (
          <p>{message.message}</p>
      ))}      
      {props.message.map(({message}) => (
          <p>{message.date}</p>
      ))}      
    </div>
);

Posts.getInitialProps = async function () {
    const res = await fetch('localhost:3000/posts');
    const message = await res.json();

    console.log({message});

    return {message};
};

export default Posts;
