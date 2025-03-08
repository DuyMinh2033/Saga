import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import './style.scss';

const openAccountSchema = Yup.object().shape({
  accountNo: Yup.string().required('Required field'),
  amount: Yup.string().required('Required field'),
  intendedUseAccount: Yup.string().required('Required field'),
  debitCardIssuance: Yup.boolean(),
  thirdPartyChecked: Yup.boolean(),
  thirdPartyName: Yup.string().when('thirdPartyChecked', {
    is: true,
    then: (schema) => schema.required('Third Party Name is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  dob: Yup.string().when('thirdPartyChecked', {
    is: true,
    then: (schema) => schema.required('Date of Birth is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  address: Yup.string().when('thirdPartyChecked', {
    is: true,
    then: (schema) => schema.required('Address is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  city: Yup.string().when('thirdPartyChecked', {
    is: true,
    then: (schema) => schema.required('City is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  province: Yup.string().when('thirdPartyChecked', {
    is: true,
    then: (schema) => schema.required('Province is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  postalCode: Yup.string().when('thirdPartyChecked', {
    is: true,
    then: (schema) => schema.required('Postal Code is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  occupation: Yup.string().when('thirdPartyChecked', {
    is: true,
    then: (schema) => schema.required('Occupation is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  relationship: Yup.string().when('thirdPartyChecked', {
    is: true,
    then: (schema) => schema.required('Relationship is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  referralCode: Yup.string(),
});

const SchemaForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(openAccountSchema),
    // defaultValues: {
    //   accountNo: "",
    //   amount: "",
    //   intendedUseAccount: "",
    //   debitCardIssuance: false,
    //   thirdPartyChecked: false,
    //   thirdPartyName: "",
    //   dob: "",
    //   address: "",
    //   city: "",
    //   province: "",
    //   postalCode: "",
    //   occupation: "",
    //   relationship: "",
    //   referralCode: "",
    // },
  });

  const thirdPartyChecked = watch('thirdPartyChecked');

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Account No</label>
        <Controller
          name="accountNo"
          control={control}
          render={({ field: { onChange, value } }) => {
            return <input onChange={onChange} value={value} />;
          }}
        />
        {errors.accountNo && <p>{errors.accountNo.message}</p>}
      </div>

      <div>
        <label>Amount</label>
        <Controller name="amount" control={control} render={({ field }) => <input {...field} />} />
        {errors.amount && <p>{errors.amount.message}</p>}
      </div>

      <div>
        <label>Intended Use Account</label>
        <Controller
          name="intendedUseAccount"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        {errors.intendedUseAccount && <p>{errors.intendedUseAccount.message}</p>}
      </div>

      <div>
        <label>Debit Card Issuance</label>
        <Controller
          name="debitCardIssuance"
          control={control}
          render={({ field }) => <input type="checkbox" {...field} />}
        />
      </div>

      <div>
        <label>Third Party Checked</label>
        <Controller
          name="thirdPartyChecked"
          control={control}
          render={({ field }) => <input type="checkbox" {...field} />}
        />
      </div>

      {thirdPartyChecked && (
        <>
          <div>
            <label>Third Party Name</label>
            <Controller
              name="thirdPartyName"
              control={control}
              render={({ field }) => <input {...field} />}
            />
            {errors.thirdPartyName && <p>{errors.thirdPartyName.message}</p>}
          </div>

          <div>
            <label>Date of Birth</label>
            <Controller name="dob" control={control} render={({ field }) => <input {...field} />} />
            {errors.dob && <p>{errors.dob.message}</p>}
          </div>

          <div>
            <label>Address</label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => <input {...field} />}
            />
            {errors.address && <p>{errors.address.message}</p>}
          </div>

          <div>
            <label>City</label>
            <Controller
              name="city"
              control={control}
              render={({ field }) => <input {...field} />}
            />
            {errors.city && <p>{errors.city.message}</p>}
          </div>

          <div>
            <label>Province</label>
            <Controller
              name="province"
              control={control}
              render={({ field }) => <input {...field} />}
            />
            {errors.province && <p>{errors.province.message}</p>}
          </div>

          <div>
            <label>Postal Code</label>
            <Controller
              name="postalCode"
              control={control}
              render={({ field }) => <input {...field} />}
            />
            {errors.postalCode && <p>{errors.postalCode.message}</p>}
          </div>

          <div>
            <label>Occupation</label>
            <Controller
              name="occupation"
              control={control}
              render={({ field }) => <input {...field} />}
            />
            {errors.occupation && <p>{errors.occupation.message}</p>}
          </div>

          <div>
            <label>Relationship</label>
            <Controller
              name="relationship"
              control={control}
              render={({ field }) => <input {...field} />}
            />
            {errors.relationship && <p>{errors.relationship.message}</p>}
          </div>
        </>
      )}

      <div>
        <label>Referral Code</label>
        <Controller
          name="referralCode"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default SchemaForm;
