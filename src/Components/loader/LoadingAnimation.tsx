import Lottie from 'lottie-react';
import loadingAnimation from '@/lib/loadingAnimations/loading.json';

export function LoadingAnimation({ className }: { className?: string }) {
  return (
    <Lottie
      animationData={loadingAnimation}
      loop={true}
      className={className || 'w-6 h-6'}
    />
  );
}