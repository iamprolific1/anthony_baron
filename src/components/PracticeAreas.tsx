import { DATA } from "../data";

export default function PracticeAreas() {
    return (
        <section id="practice" className="py-14 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold">Practice Areas</h2>
                <p className="mt-2 text-gray-600">Primary areas of practice where Anthony provides senior counsel, consultancy, and case reviews.</p>


                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {DATA.practiceAreas.map((area) => (
                    <div key={area} className="p-5 bg-white border rounded shadow-sm">
                    <h3 className="font-semibold">{area}</h3>
                    <p className="mt-2 text-sm text-gray-600">Experienced counsel for complex cases in {area.toLowerCase()} — trials, appeals and advisory work.</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}