import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE, RADIUS, SPACING, Z_INDEX } from '../../theme/styles/spacing';

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
    fontSize: FONT_SIZE.lg,
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
});
export default styles;
