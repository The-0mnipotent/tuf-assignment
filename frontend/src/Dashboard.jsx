import React from "react";
import "./Dashboard.css";

function Dashboard({
  showBanner,
  setShowBanner,
  bannerText,
  setBannerText,
  bannerTime,
  setBannerTime,
  bannerLink,
  setBannerLink,
}) {
  const handleSave = () => {
    fetch("http://localhost:5000/api/banner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: bannerText,
        timer: bannerTime,
        link: bannerLink,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
      });
  };

  const recommendedLinks = [
    "https://github.com",
    "https://linkedin.com",
    "https://example.com",
    "https://openai.com",
    "https://reactjs.org",
  ];

  return (
    <div className="dashboard">
      <h2>Settings</h2>
      <div className="form-group">
        <label>Show Banner:</label>
        <label className="switch">
          <input
            type="checkbox"
            checked={showBanner}
            onChange={() => setShowBanner(!showBanner)}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="form-group">
        <label>Banner Text:</label>
        <input
          type="text"
          value={bannerText}
          onChange={(e) => setBannerText(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Banner Timer (seconds):</label>
        <input
          type="number"
          value={bannerTime}
          onChange={(e) => setBannerTime(Number(e.target.value))}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Banner Link:</label>
        <input
          type="text"
          value={bannerLink}
          onChange={(e) => setBannerLink(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Common Links:</label>
        <div className="recommended-links">
          {recommendedLinks.map((link, index) => (
            <button
              key={index}
              className="recommended-link-button"
              onClick={() => setBannerLink(link)}
            >
              {link.length > 25 ? link.substring(0, 22) + "..." : link}
            </button>
          ))}
        </div>
      </div>
      <button className="save-button" onClick={handleSave}>
        Save New Timer
      </button>
    </div>
  );
}

export default Dashboard;
