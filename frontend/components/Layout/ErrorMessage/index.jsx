import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../redux/actions';

const ErrorMessage = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  return (
    error.message && (
      <div className="container" style={{ width: '540px' }}>
        <article class="message is-danger">
          <div class="message-header">
            <p>{error.message}</p>
            <button
              class="delete"
              aria-label="delete"
              onClick={() => dispatch(actions.removeError())}
            ></button>
          </div>
        </article>
      </div>
    )
  );
};

export default ErrorMessage;
