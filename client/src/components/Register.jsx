import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from './../assets/avatar.jpg';
import style from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/Validate';
const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  /**formic does not support file upload so i need to create */
  const navigate = useNavigate();
  return (
    <div className="container max-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-screen w-screen flex-col">
        <div className={style.glass}>
          <div className="title flex justify-center items-center flex-col">
            <h4 className="text-5xl  font-bold">Register</h4>
            <p className="py-4 text-xl w-2/3 text-center text-gray-950">
              happy to join You!
            </p>
          </div>
          <form className="py-1 " onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={avatar}
                  alt="avatar"
                  width={200}
                  className={style.profile_img}
                />
              </label>
              <input type="file" name="profile" id="profile" />
            </div>
            <div className="textbox  flex justify-center flex-col gap-6 items-center">
              <input
                type="email"
                {...formik.getFieldProps('email')}
                className={style.textbox}
                placeholder="Email*"
              />
              <input
                type="username"
                {...formik.getFieldProps('username')}
                className={style.textbox}
                placeholder="UserName*"
              />
              <input
                type="password"
                {...formik.getFieldProps('password')}
                className={style.textbox}
                placeholder="Password*"
              />
              <button className={style.btn} type={'submit'}>
                Sign in
              </button>
            </div>
            <div className="text-center py-4">
              <p>
                Already Registered ?&nbsp;
                <span
                  onClick={() => navigate('/recovery')}
                  className="text-red-500 cursor-pointer"
                >
                  Login!
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
