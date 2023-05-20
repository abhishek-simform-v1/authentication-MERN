import { toast } from 'react-hot-toast';
/** validate login page username */
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  return errors;
}
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error('Username Required!');
  } else if (values.username.includes(' ')) {
    error.username = toast.error('Invalid Username');
  }
  return error;
}

/**validate password */
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}
function passwordVerify(error = {}, values) {
  var passValidate =
    /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  if (!values.password) {
    error.password = toast.error('Password Required!');
  } else if (values.password.includes(' ')) {
    error.password = toast.error('Invalid Password');
  } else if (values.password.length < 6) {
    error.password = toast.error('Password must be at least 6 characters');
  } else if (!passValidate.test(values.password)) {
    error.password = toast.error('Password must have special characters');
  }

  return error;
}

/** reset password validation */
export async function resetPasswordValidate(values) {
  const errors = passwordVerify({}, values);
  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error('Password not match...!');
  }
  return errors;
}
