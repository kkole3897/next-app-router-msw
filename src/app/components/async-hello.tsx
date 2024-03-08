import { requestHello } from '@/api';

export default async function AsyncHello() {
  const { data: { text } } = await requestHello();

  return <div>{text}</div>
}
