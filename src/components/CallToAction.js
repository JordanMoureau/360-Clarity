import { useNavigate } from "react-router-dom";

const CallToAction = ({ headline, subheadline, buttonText }) => {
  const navigate = useNavigate(); // React Router navigation

  // Function to handle conversion tracking & navigation
  const handleButtonClick = () => {
    // LinkedIn Tracking
    if (window.lintrk) {
      window.lintrk("track", { conversion_id: 18902012 });
    } else {
      console.error("LinkedIn tracking is not available");
    }

    // Google Ads Conversion Tracking
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion("/quiz");
    } else if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-16851850239/q1fuCKa3tZoaEP-ny-M-",
        value: 1.0,
        currency: "USD",
        event_callback: () => {
          navigate("/quiz"); // Navigate to quiz page
        },
      });
    } else {
      console.error("Google Analytics tracking is not available");
      navigate("/quiz"); // Fallback navigation
    }
  };

  return (
    <div className="cta bg-blue-500 text-white py-10 px-10 text-center">
      <h2 className="text-3xl font-bold">{headline}</h2>
      <p className="text-lg mt-4">{subheadline}</p>
      <button
        onClick={handleButtonClick}
        className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CallToAction;
