import { useAppDispatch, useAppSelector } from "app";
import TextInput from "components/TextInput";
import { useCallback, useState } from "react";
import "./registrationForm.css";
import UTILS from "utils";

type Tstate = {
  "Mobile Number or Email": string;
  "Full Name": string;
  Username: string;
  Password: string;
};

const initialState: Tstate = {
  "Mobile Number or Email": "",
  "Full Name": "",
  Username: "",
  Password: "",
};
const { emailValidation, passwordValidation, userNameValidation } =
  UTILS.Validations;

const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((s) => s.user);

  // const a = {login:"armen21",passowrd:'Armen.21.06'};
  // const f = ():void=>{
  //     dispatch(login());
  // }

  console.log(/\d/.test("asghas1dhg"));

  const [inputValues, setValues] = useState<Tstate>(initialState);

  const handleChange = useCallback(
    (input: string) => (value: string) => {
      switch (input) {
        case "Mobile Number or Email": {
          setValues((p) => ({ ...p, "Mobile Number or Email": value }));
          break;
        }
        case "Full Name": {
          setValues((p) => ({ ...p, "Full Name": value }));
          break;
        }
        case "Username": {
          setValues((p) => ({ ...p, Username: value }));
          break;
        }
        case "Password": {
          setValues((p) => ({ ...p, Password: value }));
          break;
        }
      }
    },
    []
  );

  return (
    <div className={"input_div"}>
      {/*<Button  func={f} buttonName={'Click me'} value={a}/>*/}
      {Object.keys(inputValues).map((e, i) => {
        return (
          <div className={"input_group"}>
            <TextInput
              key={i}
              placeholder={e}
              onChange={handleChange(e)}
              type={e === "Password" ? "password" : "text"}
              value={inputValues[e as keyof typeof inputValues]}
            />
          </div>
        );
      })}
      <div>
        <p className="middleBodyText">
          People who use our service may have uploaded your contact information
          to Instagram. Learn More
        </p>
      </div>
      <div>
        <p className="middleBodyText">
          By signing up, you agree to our Terms , Privacy Policy and Cookies
          Policy.
        </p>
      </div>

      <button className={"signUp_Button"}>Sign up</button>
    </div>
  );
};

export default RegistrationForm;
