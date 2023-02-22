const headers = { accept: 'application/json', 'X-API-Key': 'HPv3BCMpE4QCggWHASRGICvAN3uyXZgngh5EBDcfIjqR89rMzMlOZ3vWW5RrQh9i' };
//got the key lol
const options = {
  method: 'GET',
  headers,
  params: { chain: '0x1' },
};

fetch(
  'https://deep-index.moralis.io/api/v2/nft/0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB/323',
  {
    method: 'GET',
    headers: headers // pass the headers object here
  }
)
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error(error));

  //legit fetch up the particular photo from the api