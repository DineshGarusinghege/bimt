import Link from "next/link";

const BreadcrumbAboutLinks = ({ breadcrumbLinks }) => {
    return (
        <section className="w-full bg-gray-100 py-4">
            <div className="max-w-7xl mx-auto px-4">
                <nav aria-label="text-black">
                    <ol className="flex items-center space-x-2 text-gray-600 text-sm">
                        {breadcrumbLinks.map((link, index) => (
                            <li key={index} className="flex items-center">
                                {/* Breadcrumb Link */}
                                {link.url ? (
                                    <Link href={link.url} className="text-black">
                                        {link.label}
                                    </Link>
                                ) : (
                                    <span className="text-black">{link.label}</span>
                                )}

                                {/* Breadcrumb Divider (except last item) */}
                                {index < breadcrumbLinks.length - 1 && (
                                    <span className="mx-2 text-black">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z"
                                                fill="black"
                                            />
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
