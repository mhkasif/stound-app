import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import {StyleSheet} from 'react-native';
import {Colors} from '../Theme/Variables';
import {hp, wp} from '../Config/responsive';

export const AlertDesign = ({
  isVisible,
  title,
  message,
  confirmText,
  onConfirm,
  onCancel,
}) => {
  return (
    <AwesomeAlert
      show={isVisible}
      showProgress={false}
      title={title}
      message={message}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={true}
      cancelText="Cancel"
      confirmText={confirmText}
      confirmButtonColor="#FF4949"
      titleStyle={styles.modalTitle}
      messageStyle={styles.modalMsg}
      cancelButtonStyle={styles.cancelBtnMain}
      confirmButtonStyle={styles.confirmBtnMain}
      cancelButtonTextStyle={styles.modalCancelBtnText}
      confirmButtonTextStyle={styles.modalcConfirmBtnText}
      onCancelPressed={onCancel}
      onConfirmPressed={onConfirm}
    />
  );
};

const styles = StyleSheet.create({
  modalTitle: {
    fontWeight: '600',
    color: Colors.black,
    fontSize: hp('2.5'),
  },
  modalMsg: {
    color: Colors.gray,
    fontSize: hp('1.8'),
    marginBottom: hp('3'),
  },
  cancelBtnMain: {
    backgroundColor: '#F6F6F6',
    paddingHorizontal: wp('1'),
    width: wp('30'),
    height: hp('6'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: hp('3'),
  },
  confirmBtnMain: {
    backgroundColor: '#FF4949',
    width: wp('30'),
    height: hp('6'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: hp('3'),
  },
  modalCancelBtnText: {
    fontSize: hp('1.8'),
    color: '#212759',
  },
  modalcConfirmBtnText: {
    fontSize: hp('1.8'),
  },
});
