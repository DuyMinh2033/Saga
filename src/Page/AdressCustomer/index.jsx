import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

const FIELDS = ["street", "city", "state", "zipCode", "country"];

const AddressForm = () => {
  const [defaultAddress, setDefaultAddress] = useState({});
  const [showVerification, setShowVerification] = useState(false);

  const { control, watch, setValue, handleSubmit } = useForm({
    defaultValues: FIELDS.reduce((acc, field) => ({ ...acc, [field]: "" }), {}),
  });

  const watchedFields = watch();

  useEffect(() => {
    const fetchDefaultAddress = async () => {
      // Giả lập API call
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              street: "123 Main St",
              city: "Example City",
              state: "Example State",
              zipCode: "12345",
              country: "Example Country",
            }),
          1000
        )
      );
      setDefaultAddress(response);
      FIELDS.forEach((field) => setValue(field, response[field]));
    };

    fetchDefaultAddress();
  }, []); 

  useEffect(() => {
    const hasChanged = FIELDS.some(
      (field) => watchedFields[field] !== defaultAddress[field]
    );
    setShowVerification(hasChanged);
  }, [watchedFields, defaultAddress]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {FIELDS.map((field) => (
        <Controller
          key={field}
          name={field}
          control={control}
          render={({ field: { onChange, value } }) => (
            <div>
              <label htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input id={field} value={value} onChange={onChange} />
            </div>
          )}
        />
      ))}

      {showVerification && (
        <Controller
          name="upload"
          control={control}
          render={({ field: { onChange } }) => (
            <div>
              <label htmlFor="verification">Xác minh địa chỉ:</label>
              <input
                type="file"
                id="verification"
                onChange={(e) => onChange(e.target.files[0])}
              />
            </div>
          )}
        />
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddressForm;
