import * as prismic from '@prismicio/client';


export const repositoryName = 'onetera-site';
export const createClient = prismic.createClient(repositoryName, {
  accessToken: 'Tzz10iIRDWHlS0SEUe3V3Ysi', // Your access token
  routes: [
    { type: 'homepage', path: '/' },
    { type: 'page', path: '/:uid' },
  ],
});
