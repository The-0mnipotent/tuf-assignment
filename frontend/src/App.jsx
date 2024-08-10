// import React, { useEffect, useState } from "react";
// import "./App.css";
// import Banner from "./Banner";
// import Dashboard from "./Dashboard";

// function App() {
//   const [showBanner, setShowBanner] = useState(true);
//   const [bannerText, setBannerText] = useState("");
//   const [bannerTime, setBannerTime] = useState(10);
//   const [bannerLink, setBannerLink] = useState("");
//   const [showDashboard, setShowDashboard] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/banner")
//       .then((res) => res.json())
//       .then((data) => {
//         setBannerText(data.description);
//         setBannerTime(data.timer);
//         setBannerLink(data.link);
//       });
//   }, []);

//   const handleShowDashboard = () => {
//     setShowDashboard(!showDashboard);
//     console.log(showDashboard);
//   };

//   return (
//     <div className={`app ${showDashboard ? "dashboard-active" : ""}`}>
//       <div
//         className={`settings-button-container ${showDashboard ? "active" : ""}`}
//       >
//         <button className="settings-button" onClick={handleShowDashboard}>
//           {showDashboard ? (
//             <>
//               <span>Close Settings</span> <i className="icon-close"></i>
//             </>
//           ) : (
//             <>
//               <span>Open Settings</span> <i className="icon-open"></i>
//             </>
//           )}
//         </button>
//       </div>
//       <div className="main-content">
//         {showBanner && (
//           <Banner
//             text={bannerText}
//             time={bannerTime}
//             link={bannerLink}
//             onHide={() => setShowBanner(false)}
//           />
//         )}
//         <div className="content">
//           <h1>Welcome to My Website</h1>
//           <p>
//             This is a simple one-page website with a banner and a countdown
//             timer.
//           </p>
//           <p>
//             Here is some more information about me and my projects. I have
//             worked on various interesting projects in web development, and you
//             can find more details about them below.
//           </p>
//           <div className="social-icons">
//             <a href="#" className="social-icon">
//               GitHub
//             </a>
//             <a href="#" className="social-icon">
//               LinkedIn
//             </a>
//             <a href="#" className="social-icon">
//               Resume
//             </a>
//           </div>
//         </div>
//       </div>
//       {showDashboard && (
//         <Dashboard
//           showBanner={showBanner}
//           setShowBanner={setShowBanner}
//           bannerText={bannerText}
//           setBannerText={setBannerText}
//           bannerTime={bannerTime}
//           setBannerTime={setBannerTime}
//           bannerLink={bannerLink}
//           setBannerLink={setBannerLink}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import "./app.css";
import Banner from "./Banner";
import Dashboard from "./Dashboard";
import "./index.css";

function App() {
  const [showBanner, setShowBanner] = useState(true);
  const [bannerText, setBannerText] = useState("");
  const [bannerTime, setBannerTime] = useState(10);
  const [bannerLink, setBannerLink] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/banner")
      .then((res) => res.json())
      .then((data) => {
        setBannerText(data.description);
        setBannerTime(data.timer);
        setBannerLink(data.link);
      });
  }, []);

  return (
    <div className={`app ${showDashboard ? "dashboard-active" : ""}`}>
      <div
        className={`settings-button-container ${showDashboard ? "active" : ""}`}
      >
        <button
          className="settings-button"
          onClick={() => setShowDashboard(!showDashboard)}
        >
          {showDashboard ? (
            <>
              <span>Close Settings</span> <i className="icon-close"></i>
            </>
          ) : (
            <>
              <span>Open Settings</span> <i className="icon-open"></i>
            </>
          )}
        </button>
      </div>
      <div className="main-content">
        {showBanner && (
          <Banner
            text={bannerText}
            time={bannerTime}
            link={bannerLink}
            onHide={() => setShowBanner(false)}
          />
        )}
        <div className="content">
          <h1>Welcome to My Website</h1>
          <p>
            This is a simple one-page website with a banner and a countdown
            timer.
          </p>
          <p>
            Here is some more information about me and my projects. I have
            worked on various interesting projects in web development, and you
            can find more details about them below.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              GitHub
            </a>
            <a href="#" className="social-icon">
              LinkedIn
            </a>
            <a href="#" className="social-icon">
              Resume
            </a>
          </div>
        </div>
      </div>
      <Dashboard
        showBanner={showBanner}
        setShowBanner={setShowBanner}
        bannerText={bannerText}
        setBannerText={setBannerText}
        bannerTime={bannerTime}
        setBannerTime={setBannerTime}
        bannerLink={bannerLink}
        setBannerLink={setBannerLink}
        className={showDashboard ? "visible" : ""}
      />
    </div>
  );
}

export default App;
