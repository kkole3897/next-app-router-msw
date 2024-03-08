'use client';

import { useEffect, useState } from 'react';
import { requestHello } from '@/api';

export default function Hello() {
  const [text, setText] = useState('');

  useEffect(() => {
    requestHello().then(({ data: { text }}) => {
      setText(text);
    });
  }, []);

  return <div>{text}</div>;
}
