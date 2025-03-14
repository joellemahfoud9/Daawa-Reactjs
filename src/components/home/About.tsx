import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-8 max-sm:text-lg">
          {t('aboutSection.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Consult Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              {t('aboutSection.consult')}
            </h3>
            <p className="text-primary">
              {t('aboutSection.consultDescription')}
            </p>
          </div>

          {/* Planning Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              {t('aboutSection.planning')}
            </h3>
            <p className="text-primary">
              {t('aboutSection.planningDescription')}
            </p>
          </div>

          {/* Wedding Day Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              {t('aboutSection.weddingDay')}
            </h3>
            <p className="text-primary">
              {t('aboutSection.weddingDayDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
