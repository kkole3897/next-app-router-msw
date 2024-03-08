export async function requestHello(): Promise<{ data: { text: string } }> {
  const response = await fetch('http://localhost:8080/hello', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
}
