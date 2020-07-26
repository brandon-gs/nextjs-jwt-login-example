import App from 'next/app';
import { wrapper } from '../redux';
import { removeError } from '../redux/actions/errorActions';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    ctx.store.dispatch(removeError());
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
