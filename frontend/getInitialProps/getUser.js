import Router from 'next/router';
import getNameServer from '../utils/getNameServer';

// If redirect is true, when user doesn't exist return to home page
export default async (ctx, redirect = false) => {
  const token = ctx.store.getState().authentication.token;
  const server = getNameServer(ctx);
  const res = await fetch(`${server}/api/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  });
  if (res.status === 200) {
    const { user } = await res.json();
    return user;
  }
  if (redirect) {
    Router.push('/');
  }
  return null;
};
