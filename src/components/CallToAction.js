const CallToAction = ({ headline, subheadline, buttonText, buttonLink }) => {
  // Function to handle the conversion tracking
  const handleButtonClick = () => {
    if (window.lintrk) {
      window.lintrk("track", { conversion_id: 18902012 });
    } else {
      console.error("LinkedIn tracking is not available");
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
