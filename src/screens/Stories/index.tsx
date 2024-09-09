import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Stories() {
  const {width} = Dimensions.get('screen');
  return (
    <ImageBackground
      style={{
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      source={{
        uri: 'https://images.pexels.com/photos/18807893/pexels-photo-18807893/free-photo-of-blanco-y-negro-paisaje-naturaleza-moda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }}>
      <View>
        <View
          style={{
            width: Dimensions.get('screen').width,
            height: 20,
            marginTop: 55,
            flexDirection: 'row',
            columnGap: 1,
            justifyContent: 'center',
          }}>
          {[1, 2, 3, 4, 5].map((item, index, array) => {
            const size = (width - 20) / array.length;
            return (
              <View
                style={{
                  width: size,
                  height: 5,
                  borderRadius: 10,
                  backgroundColor: 'rgba(255,255,255, 0.35)',
                }}>
                {index === 0 && (
                  <View
                    style={{
                      width: '60%',
                      height: 5,
                      backgroundColor: 'white',
                      borderRadius: 10,
                    }}
                  />
                )}
              </View>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/image.png')}
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Marry
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name="close" color={'white'} size={18} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'rgba(255,255,255, 0.20)',
          width: width * 0.9,
          height: 60,
          borderRadius: 20,
          marginBottom: 40,
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
          }}>
          Reply to marry{' '}
        </Text>
      </View>
    </ImageBackground>
  );
}
