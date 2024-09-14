/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import BottomSheet from "../../components/BottomSheet";
import "./style.scss";

const CustomerInfo = ({ dataUser, openBs, setIsOpenBs, data = [] }) => {
  console.log(data);
  return (
    <div>
      <BottomSheet
        open={openBs}
        title={"CustomerInfo"}
        onClose={() => setIsOpenBs(false)}
      >
        <div className="">
          {data?.map((item) => {
            return <p key={item.name}>{item.name}</p>;
          })}
        </div>
      </BottomSheet>
    </div>
  );
};

export default CustomerInfo;
