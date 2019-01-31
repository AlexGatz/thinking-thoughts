import ReactSVG from "react-svg";

const Links = () => (
    <div className="logoStyle">
      <ReactSVG src="../static/github-logo.svg" onClick={() => {location.href = "https://github.com/AlexGatz";}} svgStyle={{ height: 30, width: 30 }} />
      <style jsx>{`
        .logoStyle {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 5px;
        }
     `}</style>
    </div>
);

export default Links;
