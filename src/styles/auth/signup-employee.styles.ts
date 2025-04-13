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
    paddingHorizontal: SPACING.smm,
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark,
    backgroundColor: 'transparent',
  },
  eyeIcon: {
    padding: 5,
  },
  errorText: {
    color: COLORS.error,
    fontSize: SPACING.ssm,
    marginTop: SPACING.xs,
  },
  mainErrorWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: SPACING.ssm,
  },
  mainErrorText: {
    color: COLORS.error,
    fontSize: SPACING.ssm,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    padding: SPACING.ssm,
    borderColor: COLORS.error,
    textAlign: 'center',
    width: '60%',
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
    marginRight: SPACING.ssm,
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
    paddingBottom : SPACING.ssm

  },
  signUpText: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.black,
  },
  signUpLink: {
    fontSize: FONT_SIZE.sm,
    fontWeight: 'bold',
    color: COLORS.primaryGreen,
  },
});

export default styles;
