// entry point for
// header
// body

import Main from "./Main";
// footer
const { default: Header } = require("./Header")
const { default: Footer } = require("./Footer")


const AppMain = () => {

    return (
      <div className="App">
         <Header/>
         <Main/>
         <Footer/>
      </div>
    );
  }
  
  export default AppMain;








