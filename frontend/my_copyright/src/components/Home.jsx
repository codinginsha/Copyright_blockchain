import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Protect Your Creative Work</h1>
      <p className="text-gray-600 mb-8">Use blockchain to secure and verify your intellectual property.</p>
      <div className="flex justify-center space-x-4">
        <Link to="/upload" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700">Register Now</Link>
        <Link to="/verify" className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-100">Verify Ownership</Link>
      </div>
    </div>
  );
}
