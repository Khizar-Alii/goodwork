import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/auth/signup-onboard.styles';
import CustomButton from '../../components/CustomButton';
import { COLORS, FONT_SIZE, RADIUS, SPACING, Weights } from '../../theme/styles/spacing';

const SignUpOnboard = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const navigation = useNavigation();

  // Handle box selection (toggle state between selected and unselected)
  const handleBoxSelect = (boxId) => {
    setSelectedBox(selectedBox === boxId ? null : boxId);
  };

  // Handle continue action based on selected box
  const handleContinue = () => {
    if (selectedBox === 1) {
      navigation.navigate('signup-jobseeker'); // Navigate to job seeker signup
    } else if (selectedBox === 2) {
      navigation.navigate('signup-employee'); // Navigate to employee signup
    }
  };

  return (
    <View style={styles.container}>
      {/* Top section with logo and headings */}
      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/images/logo2.png')}
          style={styles.logo}
        />
        <Text style={styles.heading}>Setup Your Profile</Text>
        <Text style={styles.subheading}>
          Let's get you where you need to be
        </Text>
      </View>

      <View>
        {/* Box selection for job seeker or employee */}
        <View style={styles.boxContainer}>
          <TouchableOpacity
            style={[
              styles.box,
              { borderColor: selectedBox === 1 ? COLORS.primaryDark : COLORS.primary },
            ]}
            onPress={() => handleBoxSelect(1)} // Select job seeker option
          >
            <View style={styles.circle} />
            <Text style={styles.boxHeading}>Find a Job</Text>
            <Text style={styles.boxSubheading}>I'm exploring jobs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.box,
              { borderColor: selectedBox === 2 ? COLORS.primaryDark : COLORS.primary },
            ]}
            onPress={() => handleBoxSelect(2)} // Select employee option
          >
            <View style={styles.circle} />
            <Text style={styles.boxHeading}>Hiring</Text>
            <Text style={styles.boxSubheading}>
              I'm looking for great talent
            </Text>
          </TouchableOpacity>
        </View>

        {/* Continue button */}
        <CustomButton
          title="Continue"
          onPress={handleContinue}
          buttonStyle={{
            backgroundColor: COLORS.primaryDark,
            paddingVertical: SPACING.ssm,
            borderRadius: RADIUS.xl,
            alignItems: 'center',
            marginTop: SPACING.xxl,
          }}
          textStyle={{
            color: COLORS.white,
            fontSize: FONT_SIZE.md,
            fontWeight: Weights.bold,
          }}
        />
      </View>
    </View>
  );
};

export default SignUpOnboard;
