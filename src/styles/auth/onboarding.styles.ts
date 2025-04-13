import {StyleSheet} from 'react-native';
import { COLORS, FONT_SIZE, RADIUS, SPACING } from '../../theme/styles/spacing';

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  onboardingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3Container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 221,
    height: 108,
    resizeMode: 'contain',
  },
  logoSmall: {
    width: 221,
    height: 108,
    resizeMode: 'contain',
  },
  text: {
    fontSize: FONT_SIZE.xll,
    textAlign: 'center',
    color: COLORS.light,
  },
  btnContainer: {
    position: 'absolute',
    bottom: SPACING.bottom,
    width: '100%',
    alignItems: 'center',
    gap: SPACING.md,
  },
  loginButton: {
    height: SPACING.top,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RADIUS.xxl,
    marginTop: SPACING.lg,
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.mmd,
    fontWeight: 'bold',
  },
});
export default styles;
