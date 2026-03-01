const HowItWorks = () => {
  const steps = [
    {
      title: "Upload Your Document",
      desc: "Securely upload your PDF or document to the Signly platform.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 16V4" strokeLinecap="round" />
          <path d="M8 8l4-4 4 4" strokeLinecap="round" />
          <rect x="4" y="16" width="16" height="4" rx="2" />
        </svg>
      ),
    },
    {
      title: "Add Signature & Details",
      desc: "Drag & drop your signature, initials, or required fields anywhere.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 21h18" />
          <path d="M9 7l6 6" />
          <path d="M15 7l-6 6" />
        </svg>
      ),
    },
    {
      title: "Send, Sign & Track",
      desc: "Share secure links, track status, and download the final signed PDF.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
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
  ];

  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 py-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold text-gray-900">
          How Signly Works
        </h2>

        <p className="mt-3 text-gray-600">
          Complete your document signing process in just three simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-16 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-50 rounded-2xl">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;