import SocialLoginScreen from '.';
import useReduxStore from '../../Hooks/UseReduxStore';
import {loginUser} from '../../Redux/Action/AuthAction';
import {
  appleIdlogin,
  faceBookLogin,
  googleLogin,
} from '../../Utils/SocialLogin';

const useSocialLoginScreen = ({navigate}) => {
  const contWithEmail = () => {
    navigate('LoginScreen');
  };
  const {dispatch} = useReduxStore();

  const appleIdAuth = () => dispatch(loginUser({type: 'appleID', datas: {}}));
  // const appleIdAuth = async () => {
  //   try {
  //     dispatch(loginUser({type: 'appleID'}));
  //     const data = await appleIdlogin();
  //     console.log('data', data);
  //   } catch (error) {
  //     console.log('err', error);
  //   }
  // };
  const googleAuth = async () => {
    dispatch(loginUser({type: 'Google', datas: {}}));
  };
  const facebookAuth = async () => {
    try {
      const data = await faceBookLogin();
      console.log('data', data);
    } catch (error) {
      console.log('err', error);
    }
  };

  return {contWithEmail, appleIdAuth, googleAuth, facebookAuth};
};
export default useSocialLoginScreen;
