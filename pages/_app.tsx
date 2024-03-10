import { AppProps } from "next/app";

import { initMocks } from '../mocks';

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  initMocks();
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
