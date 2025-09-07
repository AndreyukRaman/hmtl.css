"use client";

export default function Footer() {
    const columns = [
        {
            title: "Company Info",
            links: ["About Us", "Careers", "Press", "Blog"],
        },
        {
            title: "Legal",
            links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Licenses"],
        },
        {
            title: "Features",
            links: ["Cool Feature 1", "Cool Feature 2", "Cool Feature 3", "Cool Feature 4"],
        },
        {
            title: "Resources",
            links: ["Docs", "Tutorials", "Community", "FAQs"],
        },
        {
            title: "Get in Touch",
            links: ["Contact Us", "Support", "Partnerships", "Newsletter"],
        },
    ];

    return (
        <footer className="bg-white py-16">
            <div className="max-w-[1050px] w-full mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-[#252B42]">
                {columns.map((col, index) => (
                    <div key={index} className="flex flex-col gap-3">
                        <h5 className="font-bold text-[16px]">{col.title}</h5>
                        <ul className="flex flex-col gap-2">
                            {col.links.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        className="text-[14px] hover:text-[#FF6551] transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
}
