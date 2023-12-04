const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row container w-full my-32 justify-center  mx-auto gap-6 p-5">
        <div className="lg:w-1/2">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/KrBhM5n/medium-shot-scientists-posing-together-23-2148969982.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-5xl italic font-bold mb-12 border-b-4 border-purple-500 pb-5 text-center">
            About Us
          </h2>
          <p>
            <span className="text-4xl">W</span>elcome to Medical Camp Management, where we are dedicated to making a positive impact on healthcare by facilitating and streamlining medical camps. Our platform is designed to empower organizers, participants, and health professionals to come together seamlessly, ensuring the success of every medical camp.
          </p>
          <p className="mt-5">
          At Medical Camp Management, our mission is to bridge the gap between healthcare providers and communities through efficient camp organization. We believe in the transformative power of medical camps to bring healthcare services directly to those in need. By providing a comprehensive platform, we aim to make the process of planning, managing, and participating in medical camps a smooth and impactful experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
