import Link from "next/link";

const BreadcrumbAboutLinks = ({ breadcrumbLinks }) => {
  return (
    <section className="w-full bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <nav aria-label="breadcrumb">
          <ol className="flex items-center space-x-2 text-gray-600 text-sm">
            {breadcrumbLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                {/* Breadcrumb Link */}
                {link.url ? (
                  <Link href={link.url} className="text-blue-600 hover:underline">
                    {link.label}
                  </Link>
                ) : (
                  <span className="text-gray-500">{link.label}</span>
                )}

                {/* Breadcrumb Divider (except last item) */}
                {index < breadcrumbLinks.length - 1 && (
                  <span className="mx-2 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="currentColor"
                    >
                      <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default BreadcrumbAboutLinks;
