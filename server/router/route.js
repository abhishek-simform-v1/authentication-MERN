import { Router } from 'express';

// import all controller from controllers
import * as controller from './../controller/appController.js';
const router = Router();

//**POST Method*/
router.route('/register').post(controller.register); //register user
// router.route('/registerMail').post(); //send the email
router.route('/authenticate').post((req, res) => res.end()); //authenticate user
router.route('/login').post(controller.login); //login app

//**GET Method*/
router.route('/user/:username').get(controller.getUser); //user with username;
router.route('/generateOTP').get(controller.generateOTP); //generate Random otp
router.route('/verifyOTP').get(controller.verifyOTP); //verify generated OTP
router.route('/createResetSession').get(controller.createResetSession); //reset all the Variables;

//**PUT Method*/
router.route('/updateuser').put(controller.updateUser); //use to update the user profile
router.route('/resetPassword').put(controller.resetPassword); //use to reset password

export default router;
