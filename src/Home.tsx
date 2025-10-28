import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  console.log('✅ Parent rendered');

  const heavyObject = {
    user: { name: 'Minh', age: 22 },
    time: Date.now(), // luôn thay đổi → luôn re-render Child nếu không có compiler
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

function HeavyChild({ data }) {
  console.log('🔥 HeavyChild re-rendered');
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) total += i;

  return <p>Heavy child done: {data.user.name}</p>;
}
