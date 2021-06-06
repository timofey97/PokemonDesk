import Url from 'url';
import config from '../config';

import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: keyof typeof config.client.endpoint, query: object): Promise<T> {
  const uri: string = Url.format(getUrlWithParamsConfig(endpoint, query));
  console.log(uri);
  const t = await fetch(uri).then((res) => res.json());
  return t;
}

export default req;
