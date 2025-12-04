import { DATA } from "../data";

export default function Timeline() {
    return (
        <section id="timeline" className="py-14 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold">Career Timeline</h2>
                <div className="mt-6 space-y-6">
                    {DATA.timeline.map((t) => (
                    <div key={t.year} className="p-4 border rounded bg-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-sm text-gray-500">{t.year}</div>
                                <div className="font-semibold">{t.title}</div>
                            </div>
                            <div className="text-sm text-gray-600">{t.desc}</div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}