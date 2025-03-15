import './styles.scss';
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
    </div>
  );
};

export default Demo;
