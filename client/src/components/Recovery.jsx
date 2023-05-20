import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
const Recovery = () => {
  const navigate = useNavigate();
  return (
    <div className="container max-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-screen w-screen flex-col">
        <div className={style.glass}>
          <div className="title flex justify-center items-center flex-col">
            <h4 className="text-5xl  font-bold">Recovery</h4>
            <p className="py-4 text-xl w-2/3 text-center text-gray-950">
              Enter OTP to recover Password
            </p>
          </div>
          <form className="py-1 ">
            <div className="textbox  flex justify-center flex-col gap-6 items-center">
              <input
                type="password"
                className={style.textbox}
                placeholder="OTP"
              />
              <span className=" text-sm text-center  text-gray-950">
                Enter 6 digit OTP sent to your Email address
              </span>
              <button
                className={style.btn}
                type={'submit'}
                onClick={() => navigate('/reset')}
              >
                Recover
              </button>
            </div>
            <div className="text-center py-4">
              <p>
                can't get OTP ?&nbsp;
                <button
                  onClick={() => navigate('/reset')}
                  className="text-red-500 cursor-pointer"
                >
                  Resend
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
