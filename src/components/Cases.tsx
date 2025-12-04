import { DATA } from "../data";

export default function Cases() {
    return (
        <section id="cases" className="py-14 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold">Selected Cases</h2>
                <p className="mt-2 text-gray-600">A curated list of representative wins and losses that shaped Anthony’s career.</p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold">Notable Wins</h3>
                        <div className="mt-4 space-y-4">
                            {DATA.cases.wins.map((c) => (
                                <article key={c.id} className="p-4 border rounded">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="font-semibold">{c.title}</h4>
                                        <div className="text-xs text-gray-500">{c.type}</div>
                                    </div>
                                    <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Won</div>
                                </div>
                                <p className="mt-3 text-sm text-gray-700">{c.summary}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Significant Losses</h3>
                        <div className="mt-4 space-y-4">
                            {DATA.cases.losses.map((c) => (
                                <article key={c.id} className="p-4 border rounded">
                                    <div className="flex items-start justify-between">
                                    <div>
                                    <h4 className="font-semibold">{c.title}</h4>
                                    <div className="text-xs text-gray-500">{c.type}</div>
                                    </div>
                                    <div className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">Lost</div>
                                    </div>
                                    <p className="mt-3 text-sm text-gray-700">{c.summary}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}