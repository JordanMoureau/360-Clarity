import { FaCheckCircle } from "react-icons/fa"; // Example icon import

function InfoSection({ icon: Icon, title, description, bulletone, bullettwo }) {
  return (
    <div className="info flex items-start gap-6 text-left my-8 px-6 py-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
      {/* Styled Icon */}
      <div className="flex-shrink-0">
        <FaCheckCircle className="w-12 h-12 text-blue-500" />
      </div>

      {/* Content Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>

        {/* Bullet Points */}
        <h3 className="text-lg font-semibold text-blue-500 mt-4 mb-2">
          Why It's Unique
        </h3>
        <ul className="list-disc pl-2 list-inside space-y-2 text-gray-700">
          <li>{bulletone}</li>
          <li>{bullettwo}</li>
        </ul>
      </div>
    </div>
  );
}

export default InfoSection;
