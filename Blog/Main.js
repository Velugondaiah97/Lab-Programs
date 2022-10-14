import React from "react";
import Sidebar from "./Sidebar";

// import image1 from './image1.png';
// import image2 from './image2.png';
// import image3 from './image3.png';
// import image4 from './image4.png';
// import image5 from './image5.png';
// import image6 from './image6.png';


const Main = () => {
    return (

    <div>

  <div className="article">
      <table className="tab">

      <h1><u>CORS policies</u></h1>

      <tr><h2 align="left"><u>what is cors policies</u></h2>
          <h5>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. </h5>
       </tr>
        <tr><h1 align="left">Methods</h1>
          <li>In axios: Axios always use base URL to start the request and the browser confirms that in the beginning HTTP OPTIONS requests by itself. Many times we need to pass tokens for authentication and the token which we are using is identified by Bearer. Now, the main part we need to pass some additional headers for CORS named as Access-Control-Allow-Credentials. This one is required because the browser needs to confirm the server if that is allowed to access resources. </li>
          <li>In fetch: To use CORS in fetch we need to use the mode option and set it to cors.</li>
          
       </tr>

      <tr><h4 align="left"><u>creating react application</u></h4>
          <li>Step 1: Create a React application using the following command:<br></br>

                            npx create-react-app example</li>
          <li>Step 2: After creating your project folder i.e. example, move to it using the following command: <br></br>
               cd example
          </li>
          <li>Step 3: Here we are using the Axios library for fetching API data, we need to install that by using the command from the root directory.

<br></br>npm install axios</li>
          
      </tr>
      <tr><h2 align="left">Example</h2>
      <p>the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.</p></tr>

     <tr><h2 align="left">requests</h2>
     <p>Not all browsers currently support following redirects after a preflighted request. If a redirect occurs after such a request, some browsers currently will report an error message such as the following:
        <br></br>Until browsers catch up with the spec, you may be able to work around this limitation by doing one or both of the following:<br></br>
<u></u>
<li>
Change the server-side behavior to avoid the preflight and/or to avoid the redirect</li>
<li>Change the request such that it is a simple request that doesn't cause a preflight</li></p></tr>

     
      
         
        <tr>
         <p> <p>
            
          </p></p></tr>

       

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </table>


   </div>
    <Sidebar />
    </div>
    )
};

export default Main;