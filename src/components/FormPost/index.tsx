import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsersRequest } from '../../redux/action/action';
import { postDataRequest } from '../../redux/action/actionPost';

const FormPost = () => {
  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postDataRequest({ data: inputData }));
  };

  useEffect(() => {
    if (data && !loading) {
      dispatch(fetchUsersRequest());
    }
  }, [data, loading, dispatch]);

  return (
    <div>
      <h3>Post Data Example</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Enter data"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default FormPost;
