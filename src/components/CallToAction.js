const CallToAction = ({ headline, subheadline, buttonText, buttonLink }) => {
  // Function to handle conversion tracking
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default navigation

    // LinkedIn Tracking
    if (window.lintrk) {
      window.lintrk("track", { conversion_id: 18902012 });
    } else {
      console.error("LinkedIn tracking is not available");
    }

    // Google Ads Conversion Tracking
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(buttonLink);
    } else if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-16851850239/q1fuCKa3tZoaEP-ny-M-",
        value: 1.0,
        currency: "USD",
        event_callback: () => {
          setTimeout(() => {
            window.location.href = buttonLink; // Delayed redirect
          }, 500); // Allows time for tracking
        },
      });
    } else {
      console.error("Google Analytics tracking is not available");
      window.location.href = buttonLink; // Fallback redirect
    }
  };

  return (
    <div className="cta bg-blue-500 text-white py-10 px-10 text-center">
      <h2 className="text-3xl font-bold">{headline}</h2>
      <p className="text-lg mt-4">{subheadline}</p>
      <a
        href={buttonLink}
        className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded"
        onClick={handleButtonClick} // Add click tracking
      >
        {buttonText}
      </a>
    </div>
  );
};

export default CallToAction;
