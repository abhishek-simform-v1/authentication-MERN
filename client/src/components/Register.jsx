import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from './../assets/avatar.jpg';
import style from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/Validate';
import convertToBase64 from '../helper/Convert';
const Register = () => {
  const [file, setFile] = useState('');
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || '' });
      console.log(values);
    },
  });
  /**formic does not support file upload so i need to create this handler*/

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  const navigate = useNavigate();
  return (
    <div className="container max-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-screen w-screen flex-col">
        <div className={style.glass}>
          <div className="title flex justify-center items-center flex-col">
            <h4 className="text-5xl  font-bold">Register</h4>
            <p className="py-4 text-xl w-2/3 text-center  ">
              happy to join You!
            </p>
          </div>
          <form className="py-1 " onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  alt="avatar"
                  width={200}
                  className={style.profile_img}
                />
              </label>
              <input
                type="file"
                name="profile"
                id="profile"
                onChange={onUpload}
              />
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
