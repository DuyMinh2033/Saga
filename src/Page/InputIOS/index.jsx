import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./Until/Yup";
const InputIOS = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      thirdPartyChecked: false,
      relationship: "",
      partnerName: "",
      age: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          position: "sticky",
          height: "56px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          right: "0",
          left: "0",
          top: "0",
          background: "red",
        }}
      >
        Header
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "calc(100vh - 56px)",
          overflow: "scroll",
        }}
      >
        <Controller
          name="thirdPartyChecked"
          control={control}
          render={({ field }) => (
            <div>
              <label>
                <input type="checkbox" {...field} />
                Bên thứ ba tham gia
              </label>
              {errors.thirdPartyChecked && (
                <p>{errors.thirdPartyChecked.message}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="relationship"
          control={control}
          render={({ field }) => (
            <div>
              <label>Mối quan hệ:</label>
              <select {...field}>
                <option value="">Chọn mối quan hệ</option>
                <option value="friend">Bạn bè</option>
                <option value="partner">Đối tác</option>
              </select>
              {errors.relationship && <p>{errors.relationship.message}</p>}
            </div>
          )}
        />

        <Controller
          name="partnerName"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tên đối tác:</label>
              <input type="text" {...field} />
              {errors.partnerName && <p>{errors.partnerName.message}</p>}
            </div>
          )}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tuổi:</label>
              <input inputMode="numeric" {...field} />
              {errors.age && <p>{errors.age.message}</p>}
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div>
              <label>Email:</label>
              <input type="email" {...field} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          )}
        />
        <Controller
          name="thirdPartyChecked"
          control={control}
          render={({ field }) => (
            <div>
              <label>
                <input type="checkbox" {...field} />
                Bên thứ ba tham gia
              </label>
              {errors.thirdPartyChecked && (
                <p>{errors.thirdPartyChecked.message}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="relationship"
          control={control}
          render={({ field }) => (
            <div>
              <label>Mối quan hệ:</label>
              <select {...field}>
                <option value="">Chọn mối quan hệ</option>
                <option value="friend">Bạn bè</option>
                <option value="partner">Đối tác</option>
              </select>
              {errors.relationship && <p>{errors.relationship.message}</p>}
            </div>
          )}
        />

        <Controller
          name="partnerName"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tên đối tác:</label>
              <input type="text" {...field} />
              {errors.partnerName && <p>{errors.partnerName.message}</p>}
            </div>
          )}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tuổi:</label>
              <input inputMode="numeric" {...field} />
              {errors.age && <p>{errors.age.message}</p>}
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div>
              <label>Email:</label>
              <input type="email" {...field} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          )}
        />
        <Controller
          name="thirdPartyChecked"
          control={control}
          render={({ field }) => (
            <div>
              <label>
                <input type="checkbox" {...field} />
                Bên thứ ba tham gia
              </label>
              {errors.thirdPartyChecked && (
                <p>{errors.thirdPartyChecked.message}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="relationship"
          control={control}
          render={({ field }) => (
            <div>
              <label>Mối quan hệ:</label>
              <select {...field}>
                <option value="">Chọn mối quan hệ</option>
                <option value="friend">Bạn bè</option>
                <option value="partner">Đối tác</option>
              </select>
              {errors.relationship && <p>{errors.relationship.message}</p>}
            </div>
          )}
        />

        <Controller
          name="partnerName"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tên đối tác:</label>
              <input type="text" {...field} />
              {errors.partnerName && <p>{errors.partnerName.message}</p>}
            </div>
          )}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tuổi:</label>
              <input inputMode="numeric" {...field} />
              {errors.age && <p>{errors.age.message}</p>}
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div>
              <label>Email:</label>
              <input type="email" {...field} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          )}
        />
        <Controller
          name="thirdPartyChecked"
          control={control}
          render={({ field }) => (
            <div>
              <label>
                <input type="checkbox" {...field} />
                Bên thứ ba tham gia
              </label>
              {errors.thirdPartyChecked && (
                <p>{errors.thirdPartyChecked.message}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="relationship"
          control={control}
          render={({ field }) => (
            <div>
              <label>Mối quan hệ:</label>
              <select {...field}>
                <option value="">Chọn mối quan hệ</option>
                <option value="friend">Bạn bè</option>
                <option value="partner">Đối tác</option>
              </select>
              {errors.relationship && <p>{errors.relationship.message}</p>}
            </div>
          )}
        />

        <Controller
          name="partnerName"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tên đối tác:</label>
              <input type="text" {...field} />
              {errors.partnerName && <p>{errors.partnerName.message}</p>}
            </div>
          )}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tuổi:</label>
              <input inputMode="numeric" {...field} />
              {errors.age && <p>{errors.age.message}</p>}
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div>
              <label>Email:</label>
              <input type="email" {...field} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          )}
        />
        <Controller
          name="thirdPartyChecked"
          control={control}
          render={({ field }) => (
            <div>
              <label>
                <input type="checkbox" {...field} />
                Bên thứ ba tham gia
              </label>
              {errors.thirdPartyChecked && (
                <p>{errors.thirdPartyChecked.message}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="relationship"
          control={control}
          render={({ field }) => (
            <div>
              <label>Mối quan hệ:</label>
              <select {...field}>
                <option value="">Chọn mối quan hệ</option>
                <option value="friend">Bạn bè</option>
                <option value="partner">Đối tác</option>
              </select>
              {errors.relationship && <p>{errors.relationship.message}</p>}
            </div>
          )}
        />

        <Controller
          name="partnerName"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tên đối tác:</label>
              <input type="text" {...field} />
              {errors.partnerName && <p>{errors.partnerName.message}</p>}
            </div>
          )}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tuổi:</label>
              <input inputMode="numeric" {...field} />
              {errors.age && <p>{errors.age.message}</p>}
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div>
              <label>Email:</label>
              <input type="email" {...field} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          )}
        />
        <Controller
          name="thirdPartyChecked"
          control={control}
          render={({ field }) => (
            <div>
              <label>
                <input type="checkbox" {...field} />
                Bên thứ ba tham gia
              </label>
              {errors.thirdPartyChecked && (
                <p>{errors.thirdPartyChecked.message}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="relationship"
          control={control}
          render={({ field }) => (
            <div>
              <label>Mối quan hệ:</label>
              <select {...field}>
                <option value="">Chọn mối quan hệ</option>
                <option value="friend">Bạn bè</option>
                <option value="partner">Đối tác</option>
              </select>
              {errors.relationship && <p>{errors.relationship.message}</p>}
            </div>
          )}
        />

        <Controller
          name="partnerName"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tên đối tác:</label>
              <input type="text" {...field} />
              {errors.partnerName && <p>{errors.partnerName.message}</p>}
            </div>
          )}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tuổi:</label>
              <input inputMode="numeric" {...field} />
              {errors.age && <p>{errors.age.message}</p>}
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div>
              <label>Email:</label>
              <input type="email" {...field} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          )}
        />
        <Controller
          name="thirdPartyChecked"
          control={control}
          render={({ field }) => (
            <div>
              <label>
                <input type="checkbox" {...field} />
                Bên thứ ba tham gia
              </label>
              {errors.thirdPartyChecked && (
                <p>{errors.thirdPartyChecked.message}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="relationship"
          control={control}
          render={({ field }) => (
            <div>
              <label>Mối quan hệ:</label>
              <select {...field}>
                <option value="">Chọn mối quan hệ</option>
                <option value="friend">Bạn bè</option>
                <option value="partner">Đối tác</option>
              </select>
              {errors.relationship && <p>{errors.relationship.message}</p>}
            </div>
          )}
        />

        <Controller
          name="partnerName"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tên đối tác:</label>
              <input type="text" {...field} />
              {errors.partnerName && <p>{errors.partnerName.message}</p>}
            </div>
          )}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tuổi:</label>
              <input inputMode="numeric" {...field} />
              {errors.age && <p>{errors.age.message}</p>}
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div>
              <label>Email:</label>
              <input type="email" {...field} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          )}
        />
        <Controller
          name="thirdPartyChecked"
          control={control}
          render={({ field }) => (
            <div>
              <label>
                <input type="checkbox" {...field} />
                Bên thứ ba tham gia
              </label>
              {errors.thirdPartyChecked && (
                <p>{errors.thirdPartyChecked.message}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="relationship"
          control={control}
          render={({ field }) => (
            <div>
              <label>Mối quan hệ:</label>
              <select {...field}>
                <option value="">Chọn mối quan hệ</option>
                <option value="friend">Bạn bè</option>
                <option value="partner">Đối tác</option>
              </select>
              {errors.relationship && <p>{errors.relationship.message}</p>}
            </div>
          )}
        />

        <Controller
          name="partnerName"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tên đối tác:</label>
              <input type="text" {...field} />
              {errors.partnerName && <p>{errors.partnerName.message}</p>}
            </div>
          )}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tuổi:</label>
              <input inputMode="numeric" {...field} />
              {errors.age && <p>{errors.age.message}</p>}
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div>
              <label>Email:</label>
              <input type="email" {...field} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          )}
        />
        <Controller
          name="thirdPartyChecked"
          control={control}
          render={({ field }) => (
            <div>
              <label>
                <input type="checkbox" {...field} />
                Bên thứ ba tham gia
              </label>
              {errors.thirdPartyChecked && (
                <p>{errors.thirdPartyChecked.message}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="relationship"
          control={control}
          render={({ field }) => (
            <div>
              <label>Mối quan hệ:</label>
              <select {...field}>
                <option value="">Chọn mối quan hệ</option>
                <option value="friend">Bạn bè</option>
                <option value="partner">Đối tác</option>
              </select>
              {errors.relationship && <p>{errors.relationship.message}</p>}
            </div>
          )}
        />

        <Controller
          name="partnerName"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tên đối tác:</label>
              <input type="text" {...field} />
              {errors.partnerName && <p>{errors.partnerName.message}</p>}
            </div>
          )}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tuổi:</label>
              <input inputMode="numeric" {...field} />
              {errors.age && <p>{errors.age.message}</p>}
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div>
              <label>Email:</label>
              <input type="email" {...field} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          )}
        />
        <Controller
          name="thirdPartyChecked"
          control={control}
          render={({ field }) => (
            <div>
              <label>
                <input type="checkbox" {...field} />
                Bên thứ ba tham gia
              </label>
              {errors.thirdPartyChecked && (
                <p>{errors.thirdPartyChecked.message}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="relationship"
          control={control}
          render={({ field }) => (
            <div>
              <label>Mối quan hệ:</label>
              <select {...field}>
                <option value="">Chọn mối quan hệ</option>
                <option value="friend">Bạn bè</option>
                <option value="partner">Đối tác</option>
              </select>
              {errors.relationship && <p>{errors.relationship.message}</p>}
            </div>
          )}
        />

        <Controller
          name="partnerName"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tên đối tác:</label>
              <input type="text" {...field} />
              {errors.partnerName && <p>{errors.partnerName.message}</p>}
            </div>
          )}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <div>
              <label>Tuổi:</label>
              <input inputMode="numeric" {...field} />
              {errors.age && <p>{errors.age.message}</p>}
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div>
              <label>Email:</label>
              <input type="email" {...field} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default InputIOS;
