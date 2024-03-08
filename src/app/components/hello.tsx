'use client';

import { useEffect, useState } from 'react';

export default function Hello() {
  const [text, setText] = useState('');

  useEffect(() => {
    const getText = async () => {
      const response = await fetch('http://api.server.com/hello');
      const { data: { text } } = await response.json();

      setText(text);
    }

    getText();
  }, []);

  return <div>{text}</div>;
}
