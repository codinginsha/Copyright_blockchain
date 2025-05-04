import { useState } from 'react';
import { uploadToIPFS } from '../services/ipfsService';
import { mintNFT } from '../services/algorandService';

export default function UploadMint() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleMint = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }
    try {
      setStatus('Uploading to IPFS...');
      const ipfsHash = await uploadToIPFS(file);

      setStatus('Minting NFT on Algorand...');
      const txId = await mintNFT(title, description, ipfsHash);

      setStatus(`Success! Transaction ID: ${txId}`);
    } catch (error) {
      console.error(error);
      setStatus('Failed to mint NFT.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Register Your Work</h2>
      <input type="text" placeholder="Title" className="w-full p-2 border mb-4" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" className="w-full p-2 border mb-4" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="file" className="mb-4" onChange={(e) => setFile(e.target.files[0])} />
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800" onClick={handleMint}>
        Upload & Mint NFT
      </button>
      <p className="mt-4 text-center text-gray-600">{status}</p>
    </div>
  );
}
