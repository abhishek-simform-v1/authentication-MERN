import UserModel from '../model/User.model.js';

/** POST: http://localhost:8080/api/register
 *  @param : {
"username" : "example123'
"password" :"admin123"
"email:"example@gmail.com" ,
"firstName":"bill"
"lastName" : "Iwill iam!l" ,
"mobile": 8009860560,
"address" : "Apt. 556, Kulas Light, Gwenboroughf' ,
"profile" :""
 }
 */
export async function register(req, res) {
  try {
    const { username, password, profile, email } = req.body;
    //check the existing user
    const existUsername = new Promise((resolve, reject) => {
      UserModel.findOne({ username }, function (err, user) {
        if (err) reject(new Error(err));
        if (user) reject({ error: 'Please use unique Username' });
        resolve();
      });
    });
    //check the existing user
    const existEmail = new Promise((resolve, reject) => {
      UserModel.findOne({ email }, function (err, email) {
        if (err) reject(new Error(err));
        if (email) reject({ error: 'Please use unique email' });
        resolve();
      });
    });

    Promise.all([existUsername, existEmail])
      .then(() => {
        if (password) {
        }
      })
      .catch((error) => {
        return res.status(500).send({
          error: 'Enable to hash password',
        });
      });
  } catch (error) {
    return res.status(500).send(error);
  }
}
/** POST: http://localhost:8080/api/login
 *  @param : {
"username" : "example123'
"password" :"admin123"
 }
 */
export async function login(req, res) {
  res.json('login route');
}
/** GET: http://localhost:8080/api/user/example123*/

export async function getUser(req, res) {
  res.json('getUser route');
}
/** PUT: http://localhost:8080/api/updateuser
   *  @param : {
"id": "<userid>"
 }
 body:{
     firstName:"",
     address:"",
     profile:""
 }
*/

export async function updateUser(req, res) {
  res.json('updateUser route');
}

/** GET: http://localhost:8080/api/generateOTP*/
export async function generateOTP(req, res) {
  res.json('generateOTP route');
}

/** GET: http://localhost:8080/api/verifyOTP*/
export async function verifyOTP(req, res) {
  res.json('verifyOTP route');
}
// successfully redirect user when OTP is Valid
/** GET: http://localhost:8080/api/createResetSession*/
export async function createResetSession(req, res) {
  res.json('createResetSession route');
}
/** PUT: http://localhost:8080/api/resetPassword*/
export async function resetPassword(req, res) {
  res.json('resetPassword route');
}
