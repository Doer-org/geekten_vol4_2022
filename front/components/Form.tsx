import { FC } from "react";
import { useState } from "react";

const Form: FC<{ title: string }> = ({ title }) => {
  const [mail, setMail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  return (
    <div className="border justify-center text-center w-1/2 shadow-md rounded-xl">
      <div className="my-6">
        <p className="text-4xl my-5">{title}</p>
      </div>
      <div className="my-8">
        <p className="text-2xl">MAIL</p>
        <input
          type="email"
          className="border text-2xl w-4/5 rounded-md"
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
            console.log(mail);
          }}
        />
      </div>
      <div className="my-8">
        <p className="text-2xl">PASSWORD</p>
        <input
          type="password"
          className="border text-2xl w-4/5 rounded-md"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
            console.log(pass);
          }}
        />
      </div>
      <div>
        <button
          type="submit"
          className="border w-32 h-14 my-6 rounded-md"
          onClick={() => {
            console.log(mail, pass);
          }}
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default Form;
