 
const Posts = (props) => {
  return (
    <div>
      <ul>
        {props.posts.map((message) => (
              <React.Fragment key={message._id}>
                <li>
                  <p className="message">{message.message}</p>
                  <p className="date">{message.date.replace(/[TZ]/g,' ')}</p>
                </li>
              </React.Fragment> 
          ))}
      </ul>
      <style jsx>{`
        div {
          color: black;
        }
        ul {
          list-style-type: none;
          padding-left: 8%;
          width: 60%;
        }
        li:nth-child(odd) {
          left: 45%;
          position: relative;
          text-align: right;
        }
        .message {
          font-size: 140%;
          margin-bottom: 0;
          margin-top: 5vh;
        }
        .date {
          font-size: 75%;
        }
    `}</style>
    </div>
  )
}

export default Posts
