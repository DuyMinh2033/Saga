import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/demo')}>Move to demo page</button>
    </div>
  );
};

export default Home;
