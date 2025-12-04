export default function Footer() {
return (
<footer className="py-8 bg-white border-t">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
<div>© {new Date().getFullYear()} Anthony Baron QC — All rights reserved.</div>
<div className="flex items-center gap-4">
<a href="#" className="underline">Privacy</a>
<a href="#" className="underline">Terms</a>
</div>
</div>
</footer>
);
}