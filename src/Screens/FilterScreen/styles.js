import {Dimensions, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  favMain: {
    paddingTop: hp('1.5'),
  },
  topHeader: {
    paddingTop: hp('1.5'),
  },
  filterMain: {
    paddingHorizontal: wp('3'),
    // paddingBottom: hp('2'),
  },
  switcher: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.primaryColor,
    marginTop: hp('1.5'),
  },
  filterHeader: {
    marginTop: hp('2'),
  },
  pickerStyle: {
    borderWidth: 1,
    borderColor: 'rgba(11, 180, 255, 0.3)',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  itemHeading: {
    marginTop: hp('3'),
    marginBottom: hp('1.5'),
    fontWeight: '500',
  },
  addButton: {
    borderWidth: 1,
    borderColor: 'rgba(11, 180, 255, 0.3)',
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: wp('3'),
    paddingVertical: hp('1'),
  },
  filterButton: {
    width: wp('20'),
  },
  locationBtn: {
    borderColor: Colors.grayBackground,
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderRadius: 0,
    justifyContent: 'flex-start',
    width: '100%',
  },
  locationBtnText: {
    fontSize: hp('2'),
    color: Colors.grayBackground,
  },
  locationBtnImg: {
    width: 22,
    height: 22,
  },
  pRange: {
    fontWeight: '600',
    marginTop: hp('3'),
    fontSize: hp('2.5'),
    marginBottom: hp('1.5'),
  },
  applyFilter: {
    height: hp('6.5'),
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
    marginBottom: hp('4'),
    marginTop: hp('4'),
  },
  filterText: {
    fontSize: hp('2'),
  },
  rangeSlider: {
    // height: 40,
    // paddingBottom: wp('6'),
    paddingHorizontal: hp('0'),
    marginHorizontal: hp('0'),
  },
  rangeTextMain: {
    flexDirection: 'row',
  },
  rangeTextLeft: {
    flex: 1,
    color: Colors.gray2,
  },
  rangeTextRight: {
    flex: 1,
    textAlign: 'right',
    color: Colors.gray2,
  },
  max: {
    backgroundColor: 'red',
  },
});
