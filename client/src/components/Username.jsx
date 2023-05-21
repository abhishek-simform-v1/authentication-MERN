import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from './../assets/avatar.jpg';
import style from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/Validate';
const Username = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      navigate('./password');
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
            <p className="py-4 text-xl w-[200px] text-center  ">
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
                type="text"
                {...formik.getFieldProps('username')}
                className={style.textbox}
                placeholder="Username"
              />
              <button className={style.btn} type={'submit'}>
                Let's Go
              </button>
            </div>
            <div className="text-center py-4">
              <p>
                Not a Member &nbsp;
                <span
                  onClick={() => navigate('/register')}
                  className="text-red-500 cursor-pointer"
                >
                  register now!!
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Username;
