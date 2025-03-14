import { useTranslation } from 'react-i18next';

const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-10 pt-12 w-full">
      {/* Left Section */}
      <div
        className="relative w-full md:w-1/2 h-96 bg-cover bg-center"
        style={{ backgroundImage: "url(/Testimonial/1_R61828.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-8 text-white space-y-2">
          <h3 className="text-lg italic">{t('testimonials')}</h3>
          <h2 className="text-3xl font-semibold">{t('fromOurClients')}</h2>
          <p className="mt-2 max-w-xs">{t('testimonialText')}</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
          <p className="text-gray-700 italic mb-4">{t('quote')}</p>
          <div className="flex items-center mt-4">
            <img
              src="\Testimonial\1_R61828.jpg"
              alt="Client"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold text-gray-800">{t('clientName')}</p>
              <p className="text-gray-500 text-sm">{t('clientDate')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
