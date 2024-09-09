import {Dimensions, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Ticket() {
  return (
    <View
      style={{
        backgroundColor: '#f27c65',
        height: 200,
        width: Dimensions.get('screen').width * 0.9,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      {[1, 2].map(item => {
        return (
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 20,
              backgroundColor: 'white',
              marginLeft: item == 1 ? -10 : 0,
              marginRight: item == 2 ? -10 : 0,
            }}
          />
        );
      })}
      <View
        style={{
          height: 1,
          width: '100%',
          position: 'absolute',
          borderBottomWidth: 1,
          borderBottomColor: 'white',
          borderStyle: 'solid',
        }}
      />
      <View
        style={{
          width: '100%',
          position: 'absolute',
          top: 0,
          backgroundColor: '#56669a',
          height: 90,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            marginTop: 15,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>DK</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: 100,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 20,
                backgroundColor: 'white',
              }}
            />
            <Icon name="airplane-sharp" size={30} color="white" />
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 20,
                backgroundColor: 'white',
              }}
            />
          </View>
          <Text style={{color: 'white', fontSize: 18}}>GZ</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            marginTop: 5,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Dhaka</Text>
          <Text style={{color: 'white', fontSize: 18}}>4H 20M</Text>
          <Text style={{color: 'white', fontSize: 18}}>Shanghai</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'transparent',
          height: 90,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            marginTop: 15,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>11 MAY</Text>
          <Text style={{color: 'white', fontSize: 18}}>10:00 AM</Text>
          <Text style={{color: 'white', fontSize: 18}}>53</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            marginTop: 5,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>DATE</Text>
          <Text style={{color: 'white', fontSize: 18}}>Departure time</Text>
          <Text style={{color: 'white', fontSize: 18}}>Number</Text>
        </View>
      </View>
    </View>
  );
}
