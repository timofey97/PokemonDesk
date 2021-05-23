import config from '../config';

function getUrlWithParamsConfig(endpointConfig: keyof typeof config.client.endpoint) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
  };

  return url;
}

export default getUrlWithParamsConfig;
