import { ReactNode, useState } from 'react';
import './styles.scss';
import { useApiMutation, useApiQuery } from './reuqestApi';
import { useNavigate } from 'react-router-dom';

interface propsType {
  children?: ReactNode;
}

const Demo: React.FC<propsType> = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const [value, setValue] = useState('');
  const mutation = useApiMutation('POST');
  const { data, isLoading } = mutation;
  const payload = { value: 'Minh' };
  const { data: useQuery } = useApiQuery('test', url, 'POST', payload);
  console.log('🚀 ~ useQuery:', useQuery);
  const navigate = useNavigate();
  const handleAddTodo = async () => {
    navigate('/ios');
    // mutation.mutate({
    //   url: 'https://jsonplaceholder.typicode.com/todos',
    //   payload: { value },
    // });
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <input onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleAddTodo}>Add ToDo</button>
    </div>
  );
};

export default Demo;
