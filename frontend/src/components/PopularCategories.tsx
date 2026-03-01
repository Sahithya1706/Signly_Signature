import {
  UploadCloud,
  PenTool,
  Link2,
  FileCheck2,
  Workflow,
  FileText,
} from "lucide-react";

const PopularCategories = () => {
  const categories = [
    {
      title: "Secure Document Upload",
      desc: "Encrypted PDF uploads with protected access control.",
      icon: UploadCloud,
    },
    {
      title: "Drag & Drop Signature",
      desc: "Place signatures anywhere with coordinate mapping.",
      icon: PenTool,
    },
    {
      title: "Tokenized Public Signing",
      desc: "Secure shareable signing links with expiry.",
      icon: Link2,
    },
    {
      title: "Audit Trail & Tracking",
      desc: "IP logging, timestamps, and signature history.",
      icon: FileCheck2,
    },
    {
      title: "Status Workflow System",
      desc: "Pending → Signed → Rejected lifecycle management.",
      icon: Workflow,
    },
    {
      title: "Final Signed PDF Generation",
      desc: "Immutable server-side PDF processing.",
      icon: FileText,
    },
  ];

  return (
    <section
      id="categories"
      className="scroll-mt-24 py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-gray-900">
          Popular Categories
        </h2>

        <p className="mt-3 text-gray-600">
          Powerful e-signature features for secure document management.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                {/* ICON CIRCLE */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon size={36} className="text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;