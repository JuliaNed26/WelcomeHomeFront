import {routes, get} from './index';

export const getPayments = () => {
  return get(`${routes.getPayments}`);
};
