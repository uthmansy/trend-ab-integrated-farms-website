"use client";

export default function About() {
  return (
    <section
      id="about-us-section"
      className="relative bg-gradient-to-b from-blue-900 to-gray-900 text-white py-16 px-8 lg:px-24"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-12 fade-in">
          About Us
        </h2>
        <div className="lg:flex lg:items-center lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 fade-in">
            <p className="text-lg lg:text-xl leading-relaxed">
              At{" "}
              <span className="text-yellow-400 font-bold">
                Sky Thrust Services
              </span>
              , we excel in delivering top-notch solutions in general trade,
              contracting, and aviation services. From sourcing the finest
              materials to facilitating seamless aviation operations, we’re
              committed to excellence and precision.
            </p>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed">
              With a legacy built on trust and innovation, our mission is to
              empower businesses and clients with reliable services that meet
              their unique needs. Whether on the ground or in the skies, we are
              your trusted partner for success.
            </p>
          </div>
          {/* Right Image */}
          <div className="lg:w-1/2 slide-in">
            <img
              src="/images/about-us-aviation.jpg" // Replace with your image path
              alt="Sky Thrust Services"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
