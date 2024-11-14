// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { validationSchema } from "./Until/Yup";
import "./styles.scss";
const InputIOS = () => {
  // const {
  //   // formState: { errors, isValid },
  // } = useForm({
  //   resolver: yupResolver(validationSchema),
  //   defaultValues: {
  //     thirdPartyChecked: false,
  //     relationship: "",
  //     partnerName: "",
  //     age: "",
  //     email: "",
  //   },
  // });

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const scrollToInput = (event) => {
    event.target.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      className="scroll-header"
      style={{
        height: "100vh",
        overflow: "scroll",
        padding: "0 24px",
        paddingBottom: "200px",
      }}
    >
      <div
        style={{
          position: "fixed",
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
          // height: "calc(100vh - 56px)",
          // overflow: "scroll",
          marginTop: "75px",
        }}
      >
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />

        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
        <input
          type="text"
          onFocus={scrollToInput}
          onBlur={() => window.scrollTo(0, 0)}
        />
      </div>
    </div>
  );
};

export default InputIOS;
