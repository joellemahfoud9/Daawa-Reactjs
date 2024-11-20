const Banner = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="w-full">
          <img
            src="src/assets/Banner/Wedding-Traditions-Bouquet-5.jpg"
            alt="Image 1"
            className="w-full h-[100%]  object-cover"
          />
        </div>
        <div className="w-full">
          <img
            src="src/assets/Banner/20200514033505_file_5ebd65299a07c_5ebd659deb0b1.avif"
            alt="Image 2"
            className="w-full h-[100%] object-cover"
          />
        </div>
        <div className="w-full">
          <img
            src="src/assets/Banner/personalised-wedding-invitation-thin-watercolour-wreath-portrait-a5-flat-1-blue.jpg"
            alt="Image 3"
            className="w-full h-[100%]  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
