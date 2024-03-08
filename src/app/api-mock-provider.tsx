'use client';

import { useState, useEffect} from 'react';

const isMockEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

export default function ApiMockProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (isMockEnabled) {
        const { setup } = await import('@/mocks/index');
        await setup();
        setIsLoaded(true);
      }
    }

    if (!isLoaded) {
      init();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return <>{children}</>;
}
