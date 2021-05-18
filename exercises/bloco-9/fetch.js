/* const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna"); */

const fetch = require("node-fetch");
// em toda async function que tem return, o return é assumido como resolve. E o reject é o throw.
async function verifiedFetch(url) {
  // toda async retorna uma Promise.
  /* if (url === 'https://api.chucknorris.io/jokes/random?category=dev') { */
  try {
    const result = await fetch(url); // await só pode ser usado quando a função é async, e o que ele espera precisa retornar uma Promise.

    if (!result.ok) {
      console.log("qualquer coisa");
      throw new Error(`url nao respondeu. ${result.status}`);
    }

    console.log("qualquer coisa 2");
    const data = await result.json();
    return data.value;
  } catch (err) {
    console.error("peguei o erro", err);
    return undefined;
  }
}

async function sendJokeToFriend(name) {
  const joke = await verifiedFetch(
    "https://api.chucknorris.io/jokes/random?category=dev"
  );
  if (!joke) {
    return console.error(`Deu merda`);
  }
  const message = `Oi ${name}, ouve essa: ${joke}`;
  console.log(message);
}

sendJokeToFriend("Anna");
/* async function verifiedFetch(url) { // toda async retorna uma Promise.
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      return fetch(url)
        .then((r) => r.json())
        .then((r) => (r.value));
    }
    throw new Error('endpoint não existe');
  }
   */
/* async function sendJokeToFriend(name) {
    const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=de')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}
 */
