'use client';

import { useState, useEffect } from 'react';
import { setup } from '@/mocks';

const isMockEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

export default function ApiMockProvider({ children }: { children: React.ReactNode }) {
  const [isMockReady, setIsMockReady] = useState(() => !isMockEnabled);

  useEffect(() => {
    async function init() {
      if (isMockEnabled) {
        console.log('msw init start');
        setup().then(() => {
          setIsMockReady(true);
          console.log('msw init end');
        })
      }
    }

    if (!isMockReady) {
      init();
    }
  }, [isMockReady]);

  if (!isMockReady) {
    return null;
  }

  return <>{children}</>;
}
