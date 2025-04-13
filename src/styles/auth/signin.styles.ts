import {StyleSheet} from 'react-native';
import { COLORS, FONT_SIZE, RADIUS, SPACING } from '../../theme/styles/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.top,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: RADIUS.xl,
    paddingHorizontal: SPACING.md,
    marginTop: SPACING.lg,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: COLORS.gray,
  },
  input: {
    flex: 1,
    paddingVertical: SPACING.ssm,
    paddingHorizontal: SPACING.ssm,
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark,
    backgroundColor: 'transparent',
  },
  eyeIcon: {
    padding: SPACING.xs,
  },
  errorText: {
    color: COLORS.error,
    fontSize: FONT_SIZE.xs,
    marginTop: SPACING.xs,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.xxxl,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: RADIUS.sm,
    marginRight: SPACING.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: COLORS.primaryDark,
  },
  tick: {
    color: COLORS.white,
    fontSize: FONT_SIZE.xxs,
  },
  rememberMe: {
    fontSize: FONT_SIZE.xs,
    color: COLORS.black,
  },
  forgotPassword: {
    fontSize: FONT_SIZE.xs,
    color: COLORS.errorDark,
    textDecorationLine: 'underline',
  },

  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.xxl,
    width: '100%',
  },
  line: {
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
    flex: 1,
    marginHorizontal: SPACING.ssm,
  },
  orText: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: SPACING.xxl,
  },
  socialButton: {
    flex: 0.48,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: RADIUS.xl,
    paddingVertical: SPACING.ssm,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: 21,
    height: 21,
    marginRight: SPACING.smm,
  },
  buttonText: {
    color: COLORS.primaryPurple,
    fontSize: FONT_SIZE.sm,
    fontWeight: 'bold',
  },
  signUpContainer: {
    position: 'absolute',
    bottom: SPACING.lg,
    left: SPACING.lg,
    right: SPACING.lg,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.black,
  },
  signUpLink: {
    fontSize: FONT_SIZE.sm,
    fontWeight: 'bold',
    color: COLORS.link,
  },
});
export default styles;
