
import "./css/StartPage.css";

export default function StartPage({ onStart }) {
  return (
    <div className="start-page">

      {/* Bakgrundsvideo */}
      <video autoPlay loop muted className="banner-video">
        <source src="/banner.mp4" type="video/mp4" />
      </video>

      {/* Overlay-innehåll ovanpå videon */}
      <div className="overlay">
        <div className="warning-box">
          ⚠️ Varning: Regelbunden konsumtion av snabbmat kan påverka din hälsa.
        </div>

       <div className="phone-overlay">
         <h1>Hungrig?</h1>
        <button className="start-btn" onClick={onStart}>Beställa</button>
        </div>


    
      </div>

    </div>
  );
}
