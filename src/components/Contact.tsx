import { DATA } from "../data";

export default function Contact() {
return (
<section id="contact" className="py-14 bg-gray-100">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-bold">Contact</h2>
<p className="mt-2 text-gray-600">For consultancy, case reviews or speaking engagements, reach out using the form below or email directly.</p>


<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<form className="space-y-4 p-4 bg-white border rounded">
<div>
<label className="block text-sm text-gray-700">Name</label>
<input className="mt-1 block w-full border rounded px-3 py-2" placeholder="Your name" />
</div>
<div>
<label className="block text-sm text-gray-700">Email</label>
<input className="mt-1 block w-full border rounded px-3 py-2" placeholder="you@example.com" />
</div>
<div>
<label className="block text-sm text-gray-700">Message</label>
<textarea className="mt-1 block w-full border rounded px-3 py-2" rows={5} placeholder="How can Anthony help?"></textarea>
</div>
<div>
<button type="button" className="px-4 py-2 bg-gray-900 text-white rounded">Send message</button>
</div>
</form>


<aside className="p-4 bg-white border rounded">
<h3 className="font-semibold">Direct contact</h3>
<div className="mt-3 text-sm text-gray-700">
<div><strong>Email:</strong> <a className="underline" href={`mailto:${DATA.email}`}>{DATA.email}</a></div>
<div className="mt-2"><strong>Phone:</strong> {DATA.phone}</div>
<div className="mt-2"><strong>Office:</strong> Surrey, England</div>


<div className="mt-4">
<h4 className="text-xs text-gray-500">Availability</h4>
<p className="text-sm text-gray-700">Available for consultancy, lectures and case reviews. Please use the form for initial enquiries.</p>
</div>
</div>
</aside>
</div>
</div>
</section>
);
}