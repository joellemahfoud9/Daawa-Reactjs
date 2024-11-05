import { services } from '../../constant';

export default function Services() {
  return (
    <div className="flex flex-col items-center pt-12 bg-white w-full">
      <div className="w-full max-w-7xl mb-5 px-4">
        <div className="flex flex-col items-start">
          <img 
            src="src/assets/Logo/logo.jpg"
            alt="Company Logo"
            className="h-32 "
            />
          
          <h2 className="text-4xl font-bold text-gray-800 relative after:block after:absolute after:right-0 after:top-0 after:h-full after:w-1/3 ">
            OUR SERVICES
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl w-full px-4">
        {services.map((service, index) => (
          <div key={index} className="relative bg-cover bg-center h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center text-gray-100 text-2xl font-light">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
