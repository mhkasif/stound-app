import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

const MessagesComp = ({msg, time, user}) => {
  return (
    <View style={styles.msgMain}>
      {user == 'sender' ? (
        <View style={styles.msgsSenderMain}>
          <View style={styles.msgs}>
            <TextComponent text={msg} styles={styles.userMsg} />
          </View>
          <View style={styles.mainTime}>
            <TextComponent text={time} styles={styles.timing} />
          </View>
        </View>
      ) : (
        <View style={styles.msgsRecieveMain}>
          <View style={styles.mainTimeRecieve}>
            <TextComponent text={time} styles={styles.timingRecieve} />
          </View>
          <View style={styles.msgsRecieve}>
            <TextComponent text={msg} styles={styles.userMsgRecieve} />
          </View>
        </View>
      )}
      {/* <TextComponent text={item?.description} styles={styles.centerDes} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  msgMain: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: hp('1.5'),
    // width: wp('96'),
    flex: 1,
  },
  msgs: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#rgba(11, 180, 255, 0.1)',
    paddingVertical: hp('1.5'),
    paddingHorizontal: wp('3'),
    alignItems: 'center',
    marginBottom: hp('1'),
    // flex: 0.7,
    backgroundColor: 'white',
    maxWidth: wp('70'),
    width: 'auto',
  },
  mainTime: {
    marginBottom: hp('1'),
    marginLeft: wp('2'),
    width: wp('20'),
    textAlign: 'left',
    justifyContent: 'flex-end',
  },
  mainTimeRecieve: {
    marginBottom: hp('1'),
    marginRight: wp('2'),
    width: wp('20'),
    textAlign: 'right',
    justifyContent: 'flex-end',
  },
  userMsg: {
    fontSize: hp('1.7'),
  },
  description: {
    fontSize: Platform.OS == 'ios' ? hp('1.5') : hp('1.8'),
  },

  timing: {
    fontSize: hp('1.5'),
    textAlign: 'left',
    color: 'rgba(41, 45, 50, 0.5)',
  },
  timingRecieve: {
    fontSize: hp('1.5'),
    textAlign: 'right',
    color: 'rgba(41, 45, 50, 0.5)',
  },
  messageView: messages => ({
    color: 'white',
    textAlign: 'center',
    backgroundColor: messages ? Colors.primaryColor : 'transparent',
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    width: Dimensions.get('screen').width * 0.05,
    height: Dimensions.get('screen').width * 0.05,
    fontSize: hp('1.5'),
    alignSelf: 'flex-end',
    marginTop: hp('1'),
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVerticaly: 'center',
  }),
  messages: {
    fontSize: hp('1.5'),
    color: 'white',
  },
  msgsSenderMain: {
    flexDirection: 'row',
    flex: 1,
  },
  msgsRecieveMain: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'right',
    flexDirection: 'row',
    flex: 1,
  },
  msgsRecieve: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#rgba(11, 180, 255, 0.1)',
    paddingVertical: hp('1.5'),
    paddingHorizontal: wp('3'),
    alignItems: 'center',
    marginBottom: hp('1'),
    // flex: 0.7,
    backgroundColor: Colors.primaryColor,
    maxWidth: wp('70'),
    width: 'auto',
  },
  userMsgRecieve: {
    color: Colors.white,
    fontSize: hp('1.7'),
  },
});

export default MessagesComp;
