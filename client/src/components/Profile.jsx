import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from './../assets/avatar.jpg';
import style from '../styles/Username.module.css';
import extend from '../styles/Profile.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidation } from '../helper/Validate';
import convertToBase64 from '../helper/Convert';
const Profile = () => {
  const [file, setFile] = useState('');
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      username: '',
      password: '',
    },
    validate: profileValidation,
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
            <h4 className="text-5xl  font-bold">Profile</h4>
            <p className="py-4 text-xl w-2/3 text-center  ">
              You can Update The Detail
            </p>
          </div>
          <form
            className="py-1  flex justify-center flex-col gap-6"
            onSubmit={formik.handleSubmit}
          >
            <div className="profile flex justify-center ">
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
            <div className="name flex gap-10 w-3/4">
              <input
                type="text"
                {...formik.getFieldProps('firstname')}
                className={style.textbox}
                placeholder="Firstname*"
              />
              <input
                type="text"
                {...formik.getFieldProps('lastname')}
                className={style.textbox}
                placeholder="Lastname*"
              />
            </div>
            <div className="name flex gap-10 w-3/4">
              <input
                type="number"
                {...formik.getFieldProps('mobile_no')}
                className={style.textbox}
                placeholder="mobile_no"
              />
              <input
                type="email"
                {...formik.getFieldProps('email')}
                className={style.textbox}
                placeholder="Email*"
              />
            </div>
            <div className="name flex flex-col gap-10 w-[100]">
              <input
                type="text"
                {...formik.getFieldProps('address')}
                className={style.textbox}
                placeholder="Address*"
              />
              <button className={style.btn} type={'submit'}>
                Register
              </button>
            </div>

            <div className="text-center ">
              <p>
                Comeback Later ?&nbsp;
                <span
                  onClick={() => navigate('/recovery')}
                  className="text-red-500 cursor-pointer"
                >
                  Log out!
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
