// components/Footer.js
export default function Footer() {
  return (
    <footer className="text-center py-4 bg-gray-100 text-gray-600 mt-auto">
      &copy; {new Date().getFullYear()} Post App. All rights reserved.
    </footer>
  );
}
