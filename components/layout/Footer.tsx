import personalData from '@/data/personal.json';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {personalData.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href={`mailto:${personalData.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">Email</a>
          <a href={personalData.github} target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}