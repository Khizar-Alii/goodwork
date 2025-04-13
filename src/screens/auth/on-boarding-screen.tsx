import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../styles/auth/onboarding.styles';
import CustomButton from '../../components/CustomButton';
import { COLORS, FONT_SIZE, SPACING } from '../../theme/styles/spacing';

const OnboardingScreen = ({ navigation }: any) => {
  return (
    <LinearGradient
      colors={[COLORS.gradeintLeft, COLORS.gradeintRight]}
      style={styles.gradientBackground}
    >
      <Onboarding
        bottomBarHighlight={false}
        showPagination={false}
        containerStyles={styles.onboardingContainer}
        pages={[
          // Slide 1
          {
            backgroundColor: COLORS.white,
            image: (
              <View style={styles.centeredView}>
                <Image
                  source={require('../../assets/images/logo2.png')}
                  style={styles.logo}
                />
              </View>
            ),
          },

          // Slide 2
          {
            backgroundColor: 'transparent',
            image: (
              <View style={styles.centeredView}>
                <Image
                  source={require('../../assets/images/logo1.png')}
                  style={styles.logoSmall}
                />
              </View>
            ),
            title: '',
            subtitle: (
              <Text style={styles.text}>
                Everyone has a unique talent. What's yours?
              </Text>
            ),
          },

          // Slide 3
          {
            backgroundColor: COLORS.white,
            image: (
              <View style={styles.slide3Container}>
                <Image
                  source={require('../../assets/images/logo2.png')}
                  style={styles.logoSmall}
                />
                <Text
                  style={[
                    styles.text,
                    { color: COLORS.black, marginTop: SPACING.lg, fontSize: FONT_SIZE.mmd },
                  ]}
                >
                  Everyone has a unique talent.
                </Text>
                <Text style={[styles.text, { color: COLORS.black, fontSize: FONT_SIZE.mmd }]}>
                  What's yours?
                </Text>
              </View>
            ),
            title: '',
            subtitle: (
              <View style={styles.btnContainer}>
                {/* Login Button with Gradient */}
                <LinearGradient
                  colors={[COLORS.gradeintLeft, COLORS.gradeintRight]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.loginButton}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}
                  >
                    <Text style={styles.loginButtonText}>Login</Text>
                  </TouchableOpacity>
                </LinearGradient>

                {/* Signup Button */}
                <CustomButton
                  title="Sign Up"
                  onPress={() => navigation.navigate('SignUp-onboard')}
                  buttonStyle={{ width: '90%' }}
                />
              </View>
            ),
          },
        ]}
        showSkip={false}
        showNext={false}
        showDone={false}
      />
    </LinearGradient>
  );
};

export default OnboardingScreen;
