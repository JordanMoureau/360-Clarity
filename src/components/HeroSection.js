import herovideo from "../assets/ScotchmanPeak.mp4";
import logo from "../assets/logo.png";

function HeroSection({ headline, subheadline, buttonText, buttonLink }) {
  // Function to handle conversion tracking
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevents default navigation

    // LinkedIn Tracking
    if (window.lintrk) {
      window.lintrk("track", { conversion_id: 18902012 });
    } else {
      console.error("LinkedIn tracking is not available");
    }

    // Google Ads Conversion Tracking using GTAG
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-16851850239/q1fuCKa3tZoaEP-ny-M-",
        value: 1.0,
        currency: "USD",
        event_callback: function () {
          setTimeout(() => {
            window.location.href = buttonLink; // Delayed redirect for tracking
          }, 500);
        },
      });
    } else {
      console.error("Google Analytics tracking is not available");
      window.location.href = buttonLink; // Fallback redirect
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={herovideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Logo in Top-Right */}
      <div className="absolute top-5 right-5 z-20">
        <img src={logo} alt="Logo" className="w-16 md:w-24 object-contain" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-white px-10 py-20 rounded-lg max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold">{headline}</h1>
        <p className="text-lg md:text-xl mt-4">{subheadline}</p>
        <a
          href={buttonLink}
          className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-600 transition"
          onClick={handleButtonClick} // 🔥 Now tracking clicks for LinkedIn & Google Ads
        >
          {buttonText}
        </a>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-white opacity-50"></div>
    </div>
  );
}

export default HeroSection;
