import { useState } from 'react';

export default function Verify() {
  const [ipfsHash, setIpfsHash] = useState('');
  const [result, setResult] = useState('');

  const handleVerify = () => {
    // Dummy verify: In real use, fetch blockchain transaction details
    if (ipfsHash.length > 10) {
      setResult('✅ Ownership Verified on Blockchain!');
    } else {
      setResult('❌ Verification Failed.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold mb-6">Verify Ownership</h2>
      <input type="text" placeholder="Enter IPFS Hash" className="w-full p-2 border mb-4" value={ipfsHash} onChange={(e) => setIpfsHash(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800" onClick={handleVerify}>
        Verify
      </button>
      <p className="mt-6 text-lg">{result}</p>
    </div>
  );
}
