export default async function getCardData () {
  const request = await fetch("https://6075786f0baf7c0017fa64ce.mockapi.io/products");
  return await request.json();
}
  
