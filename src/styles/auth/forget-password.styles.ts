import { StyleSheet } from 'react-native';
import { SPACING, FONT_SIZE, RADIUS, COLORS, Z_INDEX } from '../../theme/styles/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.top,
  },
  backButton: {
    position: 'absolute',
    top: SPACING.top,
    left: SPACING.lg,
    zIndex: Z_INDEX.dropdown,
  },
  topHeading: {
    color: COLORS.black,
    fontSize: FONT_SIZE.lg,
    marginTop: SPACING.xxxl,
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
  errorText: {
    color: 'red',
    fontSize: FONT_SIZE.xs,
    marginTop: SPACING.xs,
    textAlign: 'right',
    marginTop: SPACING.md,
  },
  btmContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1 / 2,
  },
  signInButton: {
    backgroundColor: COLORS.primaryLight,
    paddingVertical: SPACING.ssm,
    borderRadius: RADIUS.xl,
    alignItems: 'center',
    marginTop: SPACING.xxl,
  },
  buttonPressed: {
    backgroundColor: COLORS.primaryDark,
  },
  signInText: {
    color: 'black',
    fontSize: FONT_SIZE.md,
  },
  btmText: {
    color: COLORS.gray,
    fontSize: FONT_SIZE.sm,
    textAlign: 'center',
  },
  btmTextMail: {
    color: COLORS.primaryDark,
    fontWeight: 'bold',
  },
});

export default styles;
