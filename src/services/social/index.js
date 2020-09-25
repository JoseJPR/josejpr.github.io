import fetch from 'isomorphic-unfetch';
import ROUTER from '../../config/router';

export default {
  get: () => {
    return new Promise(resolve => {
      fetch(ROUTER.bucketS3)
      .then(async (response) => {
        const content = await response.json();
        resolve(content);
      })
      .then((result) => {
        resolve(result);
      });
    });
  },
};