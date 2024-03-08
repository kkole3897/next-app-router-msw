'use client';

import { useState, useEffect } from 'react';

const isMockEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

export default function ApiMockProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(!isMockEnabled);

  useEffect(() => {
    function init() {
      if (typeof window !== 'undefined' && isMockEnabled) {
        import('@/mocks/browser')
          .then(({ worker }) => worker.start())
          .then(() => setIsLoaded(true));
      }
    }

    init();
  }, []);

  if (!isLoaded) {
    return null;
  }

  return <>{children}</>;
}
