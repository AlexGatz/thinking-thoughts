import fetch from "isomorphine-unfetch";

const Posts = (props) => (
    <div>      
      {props.message.map(({message}) => (
          <p>{message.content}</p>
      ))}      
      {props.message.map(({message}) => (
          <p>{message.date} {message.time}</p>
      ))}      
    </div>
);

Posts.getInitialProps = async function () {
    const res = await fetch('api adress to get texts');
    const message = await res.json();

    console.log({message});

    return {message};
};

export default Posts;
