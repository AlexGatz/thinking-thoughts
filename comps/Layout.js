import Footer from "./Footer.js";

const Layout = (props) => (
  <div>
    {props.children}
    <Footer/>
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Anonymous+Pro");

      body {
         margin: 0;
         padding: 0;
         border: 0;
         background-color: white;
         width: 100vw;
         height: 100vh;
         font-family: 'Anonymous Pro', monospace;
       } 
    `}</style>
  </div>
  
);

export default Layout;
