import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaCloudUploadAlt } from 'react-icons/fa';

import Alert from '../../components/Alert/Alert';
import DropDown from '../../components/DropDown/DropDown';
import InputDropDown from '../../components/InputDropDown/InputDropDown';
import useReducers from '../../hooks/useReducer';
import useSagas from '../../hooks/useSaga';

import { countries as data } from './constans';
import { getUserInfo } from './Redux/action';
import { infoUserReducer } from './Redux/reducer';
import { getUserInfoSaga } from './Redux/saga';
import { UserInfoFeatureName } from './Redux/type';
import './styles.scss';

const dataInfo = {
  email: 'Minh',
  countries: 'Canada',
};
const PraticePage = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const [countries, isUpLoad] = watch(['countries', 'isUpLoad']);
  useSagas([{ key: UserInfoFeatureName, saga: getUserInfoSaga }]);
  useReducers([{ key: UserInfoFeatureName, reducer: infoUserReducer }]);

  // const userInfo = useSelector(usersInfoSelector);
  // console.log("🚀 ~ PraticePage ~ userInfo:", userInfo);

  const refInput = useRef(null);
  const [showAlert, setShowAlert] = useState({
    isShow: false,
    title: '',
  });

  useEffect(() => {
    reset(dataInfo);
  }, []);

  const compareValue = (defailt, value) => {
    if (countries === dataInfo.countries && !isUpLoad) {
      for (const [key, item] of Object.entries(value)) {
        if (defailt[key] !== item) {
          return true;
        }
      }
    }
    return false;
  };

  const submitForm = (value) => {
    const checked = compareValue(dataInfo, value);
    if (checked) {
      return setShowAlert({
        isShow: true,
        title: 'Pls inter upload file',
      });
    }
    getUserInfo();
  };
  const handleSelect = (value) => {
    console.log('🚀 ~ handleSelect ~ value:', value);
  };

  const [imageSrc, setImageSrc] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setValue('isUpLoad', file);
  };

  return (
    <>
      <form className="page__container">
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputDropDown showIcon {...field} />}
        />

        <Controller
          name="countries"
          control={control}
          render={({ field }) => (
            <DropDown showIcon data={data} onSelectect={handleSelect} {...field} />
          )}
        />
        <div className="upload__file" onClick={() => refInput.current.click()}>
          {imageSrc && <img src={imageSrc} className="upload__img" />}
          {!imageSrc && (
            <div className="icon__upload">
              <FaCloudUploadAlt size={50} />
            </div>
          )}
          <input ref={refInput} type="file" onChange={handleUpload} className="input__file" />
        </div>

        <button type="submit" onClick={handleSubmit(submitForm)}>
          Submit
        </button>
      </form>
      <Alert
        isOpen={showAlert.isShow}
        title={showAlert.title}
        onClose={() => setShowAlert(false)}
      />
    </>
  );
};

export default PraticePage;
