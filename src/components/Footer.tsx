export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} BBYMedia.</p>
      </div>
    </footer>
  );
}
