import config from '../config';

function getUrlWithParamsConfig(endpointConfig: keyof typeof config.client.endpoint, query: any) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val]);
      // eslint-disable-next-line no-param-reassign
      delete query[val];
      return result;
    }
    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = {
    ...query,
  };

  console.log(url);

  return url;
}

export default getUrlWithParamsConfig;
