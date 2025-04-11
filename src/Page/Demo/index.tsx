import './styles.scss';
<<<<<<< Updated upstream
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';

import { dobSchema, formatBirthDay } from './contanst';

const Demo = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(dobSchema),
    defaultValues: { test: '' },
  });

  useEffect(() => {
    console.log(formatBirthDay('02292005'));
  }, []);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <div className="px-[24px] w-full">
        <Controller
          control={control}
          name="test"
          render={({ field: { onChange, value = '' } }) => (
            <input
              type="text"
              value={value}
              onChange={(e) => {
                onChange(formatBirthDay(e.target.value, value));
              }}
            />
          )}
        />
        {errors?.test && <p style={{ color: 'red', fontSize: '13px' }}>{errors.test.message}</p>}
      </div>
=======
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';

import HmacSHA256 from 'crypto-js/hmac-sha256';
import encHex from 'crypto-js/enc-hex';
const endPoint = 'http://localhost:9000/api/auth';
const Demo: React.FC = () => {
  const generateSignature = (data: any): { signature: string; timestamp: number } => {
    const timestamp = Date.now();
    const payload = JSON.stringify({ data, timestamp });
    const hash = HmacSHA256(payload, 'SECRET_KEY_SIGNATURE');
    return {
      signature: hash.toString(encHex),
      timestamp,
    };
  };
  const { control, handleSubmit } = useForm({
    defaultValues: { email: 'password@gmail.com', password: 'hello' },
  });

  const handleSubmitForm = async (values: {}) => {
    const { signature, timestamp } = generateSignature(values);
    console.log({
      signature,
      timestamp,
    });
    const postData = await axios.post(`${endPoint}/sign-in`, values, {
      withCredentials: true,
      headers: {
        'x-signature': signature,
        'x-timestamp': timestamp,
      },
    });
    console.log('🚀 ~ handleSubmitForm ~ values:', postData);
  };

  const handleGetUser = async () => {
    const getUser = await axios.get(`${endPoint}/get-user`, { withCredentials: true });
    console.log('🚀 ~ handleGetUser ~ getUser:', getUser);
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col gap-4">
      <Controller
        name="email"
        control={control}
        render={({ field }) => <input {...field} placeholder="name" />}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => <input {...field} placeholder="password" />}
      />
      <button onClick={handleSubmit(handleSubmitForm)}>Submit</button>
      <button onClick={handleGetUser}>get user</button>
>>>>>>> Stashed changes
    </div>
  );
};

export default Demo;
