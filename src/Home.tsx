import { useEffect, useRef } from 'react';

const Home = () => {
  const ref = useRef<null>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" inputMode="numeric" ref={ref} autoComplete="off" autoCapitalize="off" />
    </div>
  );
};

export default Home;
