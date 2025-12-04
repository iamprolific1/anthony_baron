import { DATA } from "../data";

export default function Publications() {
return (
    <section id="publications" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Publications</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
                {DATA.publications.map((p) => (
                    <li key={p.title} className="p-3 border rounded bg-gray-50 flex items-center justify-between">
                    <div>
                        <div className="font-medium">{p.title}</div>
                        <div className="text-xs text-gray-500">{p.year}</div>
                    </div>
                    <a className="text-sm underline" href="#">Read</a>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);
}