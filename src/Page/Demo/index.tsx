import './styles.scss';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { dobSchema, formatBirthDay } from './contanst';

const Demo = () => {
  const {
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(dobSchema),
    defaultValues: { test: '' },
  });
  const [test] = watch(['test']);
  console.log('errors', errors, isValid, test);
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
              onChange={(e) => onChange(formatBirthDay(e.target.value))}
            />
          )}
        />
        {errors?.test && <p>{errors.test.message}</p>}
      </div>
    </div>
  );
};

export default Demo;
