/* eslint-disable no-unused-vars */
export const transformRequest = (payload, language = 'en') => {
  return {
    elData: { ...payload },
    elHeader: {},
  };
};
