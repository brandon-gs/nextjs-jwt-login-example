import verifyToken from '../getInitialProps/verifyToken';
import getUser from '../getInitialProps/getUser';
import Layout from '../components/Layout/';

const Whoami = ({ user }) => {
  return (
    <Layout title="Who Am I">
      {(user && (
        <h3 className="title is-3">
          You are logged in as{' '}
          <strong className="is-size-2 has-text-primary">{user}</strong>.
        </h3>
      )) || <h3 className="title is-3 ">You aren't logged</h3>}
    </Layout>
  );
};

Whoami.getInitialProps = async ctx => {
  verifyToken(ctx);
  const user = await getUser(ctx);
  return { user };
};

export default Whoami;
