import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#272627',
    borderTopWidth: 0,
    elevation: 0,
    height: 50,
    width: '50%',
    borderRadius: 20,
    marginHorizontal: '100',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    margin: 8,
  },
  tabButtonActive: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  headerBackground: {
    flex: 1,
    backgroundColor: '#f2f3f7',
  },
  headerTitleText: {
    color: '#090809',
    fontSize: 32,
    fontWeight: 'bold',
  },
  tabBarLabel: {
    color: '#f2f2f6',
    fontWeight: 'bold',
    height: 30,
    marginBottom: 18,
  },
  tabBarLabelActive: {
    color: '#047bfb',
  },
  headerTitle: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
