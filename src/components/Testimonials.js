function Testimonials({ testimonials }) {
  return (
    <div className="testimonials py-10 px-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial bg-white p-6 rounded-lg shadow-lg"
          >
            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            <h3 className="text-lg font-semibold mt-4 text-blue-600">
              {testimonial.clientName}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
