import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const AddressForm = () => {
  const [addresses, setAddresses] = useState([]);
  const [requireVerification, setRequireVerification] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const watchedFields = watch(['addressId', 'street', 'city']);

  useEffect(() => {
    const fetchAddresses = async () => {
      const response = {
        addresses: [
          {
            id: 1,
            type: 'home',
            value: 'Home Address',
            street: '123 Home St',
            city: 'Hometown',
          },
          {
            id: 2,
            type: 'work',
            value: 'Work Address',
            street: '456 Work Ave',
            city: 'Workville',
          },
        ],
      };
      setAddresses(response.addresses);
      const initialAddress = response.addresses[0];
      setInitialValues(initialAddress);
      reset({
        addressId: initialAddress.id,
        street: initialAddress.street,
        city: initialAddress.city,
      });
    };

    fetchAddresses();
  }, [reset]);

  useEffect(() => {
    const [selectedAddressId, street, city] = watchedFields;
    const selectedAddress = addresses.find((addr) => addr.id === Number(selectedAddressId));

    if (selectedAddress?.type === 'home') {
      const isChanged = street !== initialValues.street || city !== initialValues.city;
      setRequireVerification(isChanged);
    } else {
      setRequireVerification(false);
    }
  }, [watchedFields, initialValues, addresses]);

  const onSubmit = (data) => {
    if (requireVerification && !data.verificationImage) {
      alert('Please upload a verification image for changed home address');
      return;
    }
    console.log(data);
  };

  const handleAddressChange = (e) => {
    const selectedId = Number(e.target.value);
    setValue('addressId', selectedId);
    const selected = addresses.find((addr) => addr.id === selectedId);
    setValue('street', selected.street);
    setValue('city', selected.city);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="addressId"
        control={control}
        rules={{ required: 'Address is required' }}
        render={({ field }) => (
          <select {...field} onChange={handleAddressChange}>
            <option value="">Select an address</option>
            {addresses.map((addr) => (
              <option key={addr.id} value={addr.id}>
                {addr.value}
              </option>
            ))}
          </select>
        )}
      />
      {errors.addressId && <p>{errors.addressId.message}</p>}

      <Controller
        name="street"
        control={control}
        rules={{ required: 'Street is required' }}
        render={({ field }) => <input {...field} placeholder="Street" />}
      />
      {errors.street && <p>{errors.street.message}</p>}

      <Controller
        name="city"
        control={control}
        rules={{ required: 'City is required' }}
        render={({ field }) => <input {...field} placeholder="City" />}
      />
      {errors.city && <p>{errors.city.message}</p>}

      {requireVerification && (
        <Controller
          name="verificationImage"
          control={control}
          rules={{
            required: 'Verification image is required for changed home address',
            validate: (value) => {
              if (!value) {
                alert('Please upload a verification image for changed home address');
                return 'Verification image is required';
              }
              return true;
            },
          }}
          render={({ field }) => (
            <input type="file" onChange={(e) => field.onChange(e.target.files[0])} />
          )}
        />
      )}
      {errors.verificationImage && <p>{errors.verificationImage.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddressForm;
