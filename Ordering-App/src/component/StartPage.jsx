
import "./css/StartPage.css";

export default function StartPage({ onStart }) {
  return (
    <div className="start-page">

      {/* Bakgrundsvideo */}
      <video autoPlay loop muted className="banner-video">
        <source src="/food.mp4" type="video/mp4" />
      </video>

      {/* Overlay-innehåll ovanpå videon */}
      <div className="overlay">
      
       <div className="phone-overlay">
         
        <button className="start-btn" onClick={onStart}>Enter</button>
        </div>
       
        <div className="warning-box">
          ⚠️ Warning: Regular consumption of fast food may affect your health.
        </div>

       
      </div>

    </div>
  );
}
