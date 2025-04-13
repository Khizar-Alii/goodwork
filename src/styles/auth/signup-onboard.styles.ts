import { StyleSheet } from 'react-native';
import {
  COLORS,
  FONT_SIZE,
  Weights,
  RADIUS,
  SPACING,
} from '../../theme/styles/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
  },
  logo: {
    marginBottom: SPACING.lg,
  },
  heading: {
    fontSize: FONT_SIZE.xll,
    fontWeight: Weights.semiBold,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 10,
  },
  subheading: {
    fontSize: FONT_SIZE.lg,
    fontWeight: Weights.medium,
    color: COLORS.black,
    textAlign: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: SPACING.xxl,
  },
  box: {
    width: '48%',
    borderWidth: 1,
    borderRadius: RADIUS.mmd,
    paddingVertical: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.smm,
    marginHorizontal: SPACING.xs,
  },
  circle: {
    width: 58,
    height: 58,
    backgroundColor: COLORS.lightGray,
    borderRadius: RADIUS.xll,
    marginBottom: SPACING.md,
  },
  boxHeading: {
    fontSize: FONT_SIZE.llg,
    fontWeight: Weights.medium,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 5,
  },
  boxSubheading: {
    fontSize: FONT_SIZE.md,
    fontWeight: Weights.light,
    color: COLORS.black,
    textAlign: 'center',
  },
});

export default styles;
