import { json } from '@shopify/remix-oxygen';

export const loader = async ({ context }) => {
  const { storefront } = context;

  const query = `
    query getProducts {
      products(first: 20) {
        nodes {
          id
          title
          vendor
          handle
          images(first: 5) {
            nodes {
              url
              altText
            }
          }
          variants(first: 10) {
            nodes {
              id
              title
              image {
                url
              }
              price {
                amount
              }
              compareAtPrice {
                amount
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await storefront.query(query);

  return json({
    products: data?.products?.nodes || [],
  });
};