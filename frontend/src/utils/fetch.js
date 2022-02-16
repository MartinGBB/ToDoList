// Referens: https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

const fetchApi = async (data, route, method) => {
  const url = `http://localhost:3001/${route}`;
  const body = JSON.stringify(data)
  let config = {};

  if (!data) {
    config = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  };

  config = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body
};

  try {
    const result = await fetch(url, config);
    const resultMessage = await result.json();
    return resultMessage;
  } catch (error) {
    return error;
  }
};

export default fetchApi;
