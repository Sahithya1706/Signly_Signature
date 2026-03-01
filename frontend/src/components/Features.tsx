const Features = () => {
  const features = [
    {
      title: "Fast & Easy Signing",
      desc: "Sign documents within seconds using our intuitive drag & drop interface.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2v20M2 12h20" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "End-to-End Encryption",
      desc: "Your documents are protected with enterprise-grade encryption.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Real-Time Tracking",
      desc: "Monitor document status with live updates and activity logs.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Audit Trail",
      desc: "Track every action including IP address, timestamps and user history.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 17v-6h6v6" />
          <path d="M12 3v8" />
          <path d="M5 21h14" />
        </svg>
      ),
    },
    {
      title: "Secure Sharing Links",
      desc: "Generate secure signing links with expiration and access control.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M10 13a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1" />
          <path d="M14 11a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1" />
        </svg>
      ),
    },
    {
      title: "PDF Export",
      desc: "Download legally signed and verified PDF documents instantly.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M14 2H6a2 2 0 00-2 2v16l6-4 6 4V8z" />
          <path d="M14 2v6h6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="scroll-mt-24 py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold text-gray-900">
          Powerful Features
        </h2>

        <p className="mt-3 text-gray-600">
          Everything you need for seamless and secure digital signing.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-2xl">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;