// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-12">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
