export const shopifyClient = async (query: string) => {
  return fetch(process.env.SHOPIFY_API_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN!,
    },
    body: JSON.stringify({ query }),
  });
};
