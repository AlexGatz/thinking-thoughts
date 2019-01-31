import Footer from "./Footer.js";

const Layout = (props) => (
  <div>
    {props.children}
    <Footer/>
    <style jsx global>{`
      body {
         margin: 0;
         padding: 0;
         border: 0;
         background-color: white;
         width: 100vw;
         height: 100vh;
       } 
    `}</style>
  </div>
  
);

export default Layout;
