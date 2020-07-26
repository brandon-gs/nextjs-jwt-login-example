import verifyToken from '../getInitialProps/verifyToken';

import Layout from '../components/Layout/';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <Layout title="Sign In">
      <Login />
    </Layout>
  );
};

LoginPage.getInitialProps = function (ctx) {
  verifyToken(ctx);
};

export default LoginPage;
