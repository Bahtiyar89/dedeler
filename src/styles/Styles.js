import {StyleSheet} from 'react-native';
import {AppColors} from './AppColors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE_COLOR,
    paddingTop: '25%',
  },
  containerPadding: {
    flex: 1,
    backgroundColor: AppColors.WHITE_COLOR,
    paddingHorizontal: 30,
    paddingTop: '25%',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowJustifyBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bigBoldTitle: {
    fontSize: 24,
    fontFamily: 'Inter-ExtraBold',
    color: 'black',
  },
  mediumBoldTitle: {
    fontSize: 18,
    fontFamily: 'Inter-ExtraBold',
    color: 'black',
  },
  mediumBlackRegular: {
    fontSize: 16,
    color: AppColors.BLACK_COLOR,
    fontFamily: 'Inter-Regular'
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    bottom: 30,
  },
  buttonContainerBottomSheet: {
    backgroundColor: AppColors.WHITE_COLOR,
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  semiBoldTitle: {
    fontSize: 16,
    fontFamily: 'Inter-ExtraBold',
    color: AppColors.BLACK_COLOR,
  },
  smallBlackBoldText: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: AppColors.BLACK_COLOR,
  },
  smallBlackSemiBoldText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: AppColors.BLACK_COLOR,
  },
  smallBoldTitle: {
    color: AppColors.BLACK_COLOR,
    fontFamily: 'Inter-Bold',
  },
  textRegular: {
    fontFamily: 'Inter-Regular',
    color: AppColors.BLACK_COLOR,
    flexShrink: 1,
  },
  textRegularSmall: {
    fontFamily: 'Inter-Regular',
    color: AppColors.BLACK_COLOR,
    fontSize: 12,
  },
  bottomSheetTitle: {
    color: AppColors.BLACK_COLOR,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  smallGreyMediumText: {
    color: AppColors.ALUMINIUM_COLOR,
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
  backIconContainer: {
    position: 'absolute',
    left: 25,
    top: 10,
    flexDirection: 'row',
  },
  bottomSheetContainer: {
    flex: 1,
    paddingHorizontal: 25,
  },
  smallRedSemiBoldText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: AppColors.CRIMSON_COLOR,
  },
  smallGreyRegularText: {
    fontSize: 12,
    color: AppColors.STORM_GREY_COLOR,
    fontFamily: 'Inter-Regular',
  },
  smallGreySemiBoldText: {
    fontSize: 12,
    color: AppColors.ALUMINIUM_COLOR,
    fontFamily: 'Inter-SemiBold',
  },
  smallGreyBoldText: {
    fontSize: 12,
    color: AppColors.STORM_GREY_COLOR,
    fontFamily: 'Inter-Bold',
  },
  greyMediumText: {
    color: AppColors.ALUMINIUM_COLOR,
    fontFamily: 'Inter-Regular',
  },
  blackExtraBoldBigText: {
    fontSize: 28,
    color: AppColors.BLACK_COLOR,
    fontFamily: 'Inter-ExtraBold',
  },
  absoluteLeftTop: {
    left: 25,
    position: 'absolute',
    top: 12,
  },
  absoluteRightTop: {
    right: 25,
    position: 'absolute',
    top: 12,
  },
});
