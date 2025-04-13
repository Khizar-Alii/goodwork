import {StyleSheet} from 'react-native';
import { SPACING,FONT_SIZE, RADIUS,COLORS } from '../../theme/styles/spacing';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.top,
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: SPACING.lg,
  },
  oval: {
    backgroundColor: COLORS.primaryDark,
    width: 138,
    height: 138,
    borderRadius: '50%',
    marginBottom: SPACING.xxxl,
  },
  passText: {
    color: COLORS.primaryDark,
    fontSize: FONT_SIZE.xl,
    fontWeight: 'bold',
  },
  sentText: {
    fontSize: FONT_SIZE.xl,
    color: COLORS.black,
    textAlign: 'center',
  },
  signInButton: {
    backgroundColor: COLORS.primaryDark,
    paddingVertical: SPACING.ssm,
    borderRadius: RADIUS.xl,
    alignItems: 'center',
    marginTop: SPACING.xxl,
    width: '100%',
  },
  signInText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
  },
  btmText: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.primaryDark,
    textDecorationLine: 'underline',
  },
});
export default styles;
