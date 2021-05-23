import Url from 'url';
import config from '../config';

import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: keyof typeof config.client.endpoint) {
  const uri: string = Url.format(getUrlWithParamsConfig(endpoint));
  // eslint-disable-next-line no-return-await
  return await fetch(uri).then((res) => res.json());
}

export default req;
