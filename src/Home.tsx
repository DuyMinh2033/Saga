import { useState } from 'react';

type HeavyData = {
  user: {
    name: string;
    age: number;
  };
  time: number;
};

type HeavyChildProps = {
  data: HeavyData;
};

export default function Home() {
  const [count, setCount] = useState(0);

  console.log('✅ Parent rendered');

  const heavyObject = {
    user: { name: 'Minh', age: 22 },
    time: Date.now(),
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React Compiler Test (Strong Example)</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <HeavyChild data={heavyObject} />
    </div>
  );
}

function HeavyChild({ data }: HeavyChildProps) {
  console.log('🔥 HeavyChild re-rendered');
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) {
    total += i;
    console.log('⏳ Heavy child working...', total);
  }

  return <p>Heavy child done: {data.user.name}</p>;
}
