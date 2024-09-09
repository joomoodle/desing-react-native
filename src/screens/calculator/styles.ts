import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'space-between',
    backgroundColor: '#2b2b2b',
  },
  boxResult: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 22,
  },
  boxButtons: {
    flexDirection: 'column',
    marginBottom: 65,
  },
  itemActions: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: Dimensions.get('screen').width,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAction: {
    backgroundColor: '#f0f0f0',
    width: Dimensions.get('screen').width / 4 - 20,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  btnLarge: {
    width: 170,
  },
  textBtn: {
    fontSize: 22,
    color: '#2b2b2b',
    fontWeight: '600',
  },
  inputResult: {
    color: 'white',
    fontSize: 70,
  },
  inputOperations: {
    color: 'white',
    fontSize: 80,
    fontWeight: '600',
  },
});

export default styles;
