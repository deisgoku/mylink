import Lottie from 'lottie-react';
import blockchainAnimation from '../public/blockchain-animation.json';

export default function BlockchainAnimation() {
  return (
    <div className="w-full h-64">
      <Lottie animationData={blockchainAnimation} loop={true} />
    </div>
  );
}