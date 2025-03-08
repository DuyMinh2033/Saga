import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  thirdPartyChecked: Yup.boolean().oneOf([true], 'Bên thứ ba phải được chọn'), // Đảm bảo checkbox được chọn
  relationship: Yup.string().when('thirdPartyChecked', {
    is: true,
    then: (schema) => schema.required('Vui lòng chọn mối quan hệ'),
    otherwise: (schema) => schema.notRequired(),
  }),
  partnerName: Yup.string().when('relationship', {
    is: 'partner',
    then: (schema) => schema.required('Tên đối tác là bắt buộc'),
    otherwise: (schema) => schema.notRequired(),
  }),

  age: Yup.number().when('thirdPartyChecked', {
    is: true,
    then: (schema) =>
      schema
        .min(18, 'Tuổi phải lớn hơn hoặc bằng 18')
        .max(60, 'Tuổi phải nhỏ hơn hoặc bằng 60')
        .required('Vui lòng nhập tuổi')
        .typeError('Tuổi phải là một số'),
    otherwise: (schema) => schema.notRequired().typeError('Tuổi phải là một số'),
  }),
  email: Yup.string().email('Địa chỉ email không hợp lệ').required('Email là bắt buộc'),
});
