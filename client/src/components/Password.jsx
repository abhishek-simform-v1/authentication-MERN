import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from './../assets/avatar.jpg';
import style from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/Validate';
const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validate: passwordValidate,
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
            <h4 className="text-5xl  font-bold">Hello Again!</h4>
            <p className="py-4 text-xl w-2/3 text-center text-gray-950">
              Explore more by connecting with us!
            </p>
          </div>
          <form className="py-1 " onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img
                src={avatar}
                alt="avatar"
                width={200}
                className={style.profile_img}
              />
            </div>
            <div className="textbox  flex justify-center flex-col gap-6 items-center">
              <input
                type="password"
                {...formik.getFieldProps('password')}
                className={style.textbox}
                placeholder="Password"
              />
              <button className={style.btn} type={'submit'}>
                Sign in
              </button>
            </div>
            <div className="text-center py-4">
              <p>
                Forgot Password ?&nbsp;
                <span
                  onClick={() => navigate('/recovery')}
                  className="text-red-500 cursor-pointer"
                >
                  Recover now!!!
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
