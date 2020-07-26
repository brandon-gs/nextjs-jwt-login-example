import Head from './Head/';
import Navbar from './Navbar';
import ErrorMessage from './ErrorMessage';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head title={title} />
      <Navbar />
      <ErrorMessage />
      <div className="has-text-centered">{children}</div>
    </div>
  );
};

export default Layout;
