import { FaCheckCircle } from "react-icons/fa"; // Example icon import

function InfoSection({ icon: Icon, title, description }) {
  return (
    <div className="info flex flex-row gap-8 items-center text-left my-8 px-6">
      {/* Adjust icon size */}
      <FaCheckCircle className="w-16  h-16 text-blue-500 flex-shrink-0" />
      <div>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default InfoSection;
