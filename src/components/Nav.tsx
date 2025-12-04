
import Image from "../assets/image1.jpeg";

export default function Nav() {
    return (
        <header className="text-center py-16 bg-linear-to-r from-blue-900 to-blue-500 text-white px-6">
            <img
            src={Image}
            alt="Anthony Baron Portrait"
            className="mx-auto rounded-full w-40 h-40 object-cover shadow-xl border-4 border-white mb-6"
            />
            <h1 className="text-5xl font-bold mb-4">Anthony James Baron, QC</h1>
            <p className="text-xl max-w-2xl mx-auto">
            Senior Legal Consultant | Criminal & Civil Litigation Specialist | 32+ Years of Practice
            </p>
        </header>
    );
}