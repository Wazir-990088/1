async function fetchShopifyProducts() {
    try {
      const response = await fetch('https://zi9mmr-0h.myshopify.com/api/2021-07/graphql.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': '9dddeb4eac3b4b8db77553ffaab076a1',
        },
        body: JSON.stringify({
          query: `
            {
              products(first: 10) {
                edges {
                  node {
                    id
                    title
                    vendor
                    variants(first: 1) {
                      edges {
                        node {
                          id
                          priceV2 {
                            amount
                          }
                          compareAtPriceV2 {
                            amount
                          }
                          title
                          image {
                            src
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `
        })
      });
  
      const data = await response.json();
      return data?.data?.products?.edges?.map((edge) => edge.node) || [];
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }