
const baseUrl = 'https://demoapi.nortify.com.ng/';

const reqConfig = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

const getAccessToken = async () => {
  const tokenEndpoint = `${baseUrl}api/token`;
  const clientId = process.env.CLIENT_ID;
  const secretKey = process.env.SECRET_KEY;
  const encode = btoa(`${clientId}:${secretKey}`);
  reqConfig.headers['X-Authorization'] = `Basic ${encode}`;
  try {
    const res = await fetch(tokenEndpoint, reqConfig);
    const data = await res.json();
    return {error: null, data}
  } catch (error) {
    console.log(error);
    return {error, data: null}
  }
}

export default async (payload) => {
  const endpoint = `${baseUrl}api/account`;
  const {error: tokenError, data: {access_token}} = await getAccessToken();
  if(tokenError){
    return {error: tokenError, data: null};
  }
  try {
    reqConfig['method'] = 'POST';
    reqConfig.headers['Authorization'] = `Bearer ${access_token}`;
    reqConfig['body'] = JSON.stringify(payload);
    const res = await fetch(endpoint, reqConfig);
    const data = await res.json();
    return {error: null, data};
  } catch (error) {
    console.log(error);
    return {error, data: null};
  }
}

