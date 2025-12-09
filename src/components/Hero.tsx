import { DATA } from "../data";
import Image from "../assets/image2.jpeg";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    return (
        <>
            <section id="hero" className="pt-12 pb-16 bg-linear-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        
                        {/* TEXT SIDE */}
                        <div className="md:col-span-7">
                            <div className="inline-flex items-center gap-3 mb-4">
                                <span className="px-2 py-1 bg-black text-white rounded-full text-xs font-medium">QC</span>
                                <span className="text-sm text-gray-600">Called to the Bar 1993 • 32+ years’ experience</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{DATA.name}</h1>
                            <p className="mt-4 text-lg text-gray-700 max-w-2xl">{DATA.intro}</p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <a href="#contact" className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded shadow-sm">Get in touch</a>
                                <a href="#cases" className="inline-flex items-center px-4 py-2 border rounded">View cases</a>
                                <a href="#publications" className="inline-flex items-center px-4 py-2 border rounded">Publications</a>
                            </div>

                            {/* EMAIL ICON */}
                    
                        </div>

                        {/* IMAGE CARD */}
                        <div className="md:col-span-5">
                            <div className="rounded-lg bg-white p-6 shadow-sm border">
                                <div className="w-full h-56 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                                    <img src={Image} className="w-full h-56 object-cover rounded-md" alt="image" />
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-sm font-semibold">Practice Snapshot</h3>
                                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                                        {DATA.practiceAreas.slice(0, 4).map((p) => (
                                            <li key={p} className="flex items-start gap-3">
                                                <span className="w-2.5 h-2.5 mt-1 rounded-full bg-gray-900" />
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-4 text-xs text-gray-500">Available for consultancy, lectures and case reviews.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHATSAPP ICON FIXED */}
            <a 
                href={`https://wa.me/${12233639005}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition"
            >
                <FaWhatsapp size={28} />
            </a>
        </>
    );
}
