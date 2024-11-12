import React from 'react';
import {View, Text} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';

import {styles} from './styles';

export const PerformancePieChart = ({pieData, centerLabel}) => {
  const centerLabelComponent = () => (
    <View style={styles.centerLabelWrapper}>
      <Text style={styles.centerLabelValue}>{centerLabel.value}</Text>
    </View>
  );

  return (
    <View>
      <PieChart
        data={pieData}
        donut
        showGradient
        sectionAutoFocus
        semiCircle
        focusOnPress
        radius={70}
        innerRadius={55}
        innerCircleColor={'#f2f3f7'}
        centerLabelComponent={centerLabelComponent}
      />
    </View>
  );
};
