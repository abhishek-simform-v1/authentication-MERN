import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate, resetPasswordValidate } from '../helper/Validate';
const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_pwd: '',
    },
    validate: resetPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  const navigate = useNavigate();
  return (
    <div className="container max-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-screen w-screen flex-col">
        <div className={style.glass}>
          <div className="title flex justify-center items-center flex-col">
            <h4 className="text-5xl  font-bold">Reset</h4>
            <p className="py-4 text-xl w-2/3 text-center  ">
              Enter new Password
            </p>
          </div>
          <form className="py-1 ">
            <div className="textbox  flex justify-center flex-col gap-6 items-center">
              <input
                type="password"
                className={style.textbox}
                placeholder="New Password"
              />
              <input
                type="password"
                {...formik.getFieldProps('confirm_pwd')}
                className={style.textbox}
                placeholder="Confirm Password"
              />
              <span className=" text-sm text-center w-2/3  ">
                New Password must have 6 character
              </span>
              <button
                className={style.btn}
                type={'submit'}
                onClick={() => navigate('/')}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
