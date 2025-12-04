export default function About() {
    return (
        <section id="about" className="py-14 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold">About</h2>
                        <p className="mt-4 text-gray-700">Born and raised in Nottingham, Anthony’s early fascination with justice led him to study law at King’s College London. After being called to the Bar in 1993, he focused on criminal defence and civil rights cases, gradually moving into high-profile appeals and public interest litigation. His work has spanned wrongful conviction appeals, corporate fraud litigation and labour rights disputes.</p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded border bg-gray-50">
                                <div className="text-xs text-gray-500">Education</div>
                                <div className="font-medium">LLB, King’s College London<br/>Bar Vocational Course (Inns of Court)</div>
                            </div>

                            <div className="p-4 rounded border bg-gray-50">
                                <div className="text-xs text-gray-500">Title</div>
                                <div className="font-medium">Queen’s Counsel (QC), 2012</div>
                            </div>
                        </div>
                    </div>

                    <aside className="p-4 rounded border bg-gray-50">
                        <h3 className="text-sm font-semibold">Personal</h3>
                        <p className="mt-2 text-sm text-gray-700">Lives in Surrey. Two children: Emma (pharmacist) and Nathan (engineering student). Hobbies include hiking, gardening and mentoring young lawyers.</p>

                        <div className="mt-4">
                            <h4 className="text-xs text-gray-500">Values</h4>
                            <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                <li>Integrity</li>
                                <li>Compassion</li>
                                <li>Precision</li>
                                <li>Respect for the rule of law</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}