const CallToAction = ({ headline, subheadline, buttonText, buttonLink }) => {
  // Function to handle the conversion tracking
  const handleButtonClick = () => {
    // LinkedIn Tracking
    if (window.lintrk) {
      window.lintrk("track", { conversion_id: 18902012 });
    } else {
      console.error("LinkedIn tracking is not available");
    }

    // Google Conversion Tracking
    if (typeof gtag !== "undefined") {
      gtag("event", "conversion", {
        send_to: "AW-16851850239/q1fuCKa3tZoaEP-ny-M-",
        value: 1.0,
        currency: "USD",
        event_callback: () => {
          window.location.href = buttonLink; // Redirect after tracking
        },
      });
    } else {
      console.error("Google Analytics tracking is not available");
      window.location.href = buttonLink; // Redirect immediately if gtag is missing
    }
  };

  return (
    <div className="cta bg-blue-500 text-white py-10 px-10 text-center">
      <h2 className="text-3xl font-bold">{headline}</h2>
      <p className="text-lg mt-4">{subheadline}</p>
      <a
        href={buttonLink}
        className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded"
        onClick={handleButtonClick} // Add the onClick handler here
      >
        {buttonText}
      </a>
    </div>
  );
};

export default CallToAction;
