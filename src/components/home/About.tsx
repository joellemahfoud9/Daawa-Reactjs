const About = () => {
  
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-8 max-sm:text-lg">
        About Our Planning Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Consult Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
            Consult
            </h3>
            <p className="text-primary">
            Write about your process here! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Planning Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
            Planning
            </h3>
            <p className="text-primary">
            Write about your process here! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Wedding Day Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
            Wedding Day
            </h3>
            <p className="text-primary">
            Write about your process here! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
