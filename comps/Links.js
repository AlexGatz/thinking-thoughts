import ReactSVG from "react-svg";

const Links = () => (
    <div>
      <ReactSVG className="svg" src="../static/github-logo.svg" onClick={() => {location.href = "https://github.com/AlexGatz";}} svgStyle={{ height: 50, width: 50}} />
      <style jsx>{`
        div {
          position: fixed;
          bottom: 0;
          left: 0;
          margin: 1vw;
          cursor: pointer;
        }
     `}</style>
    </div>
);

export default Links;
