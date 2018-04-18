import React from 'react';
import { StyleSheet,
 Text, 
 Button,
 TouchableOpacity,
 View, 
 ImageBackground,
 StatusBar,
 Image,
 TextInput,
 ScrollView,
 Alert, ActivityIndicator
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const home = require('./img/home.png');
const detail = require('./img/detail.png');
const tambah = require('./img/tambah.png');
class EventsScreen extends React.Component {
	static navigationOptions = {
    header: null
 };
	
	constructor()
    {
        super();
        this.state = {
        nama: '',
      	manufactory: '',
      	tracks: '',
      	sejarah: '',
      	tahun: '',
          ActivityIndicator_Loading: false,
        }
    }
    submitData = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://gusnando.com/mobile/dewa/daftarkejuaraan.php',
            {
                method: 'POST',
                headers:
                {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nama : this.state.nama,
                  manufactory : this.state.manufactory,
                  tracks : this.state.tracks,
                  sejarah : this.state.sejarah,
                  tahun : this.state.tahun,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                Alert.alert('SUCESS', responseJsonFromServer);
                this.setState(
                {
                nama: '',
      				  manufactory: '',
      				  tracks: '',
      				  sejarah: '',
      				  tahun: '',
                  ActivityIndicator_Loading : false
                });

            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }


	render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator color='#FFFFFF' size='large'/>
        </View>
      );
    }

		return(
			<ImageBackground
      		source={require('./img/bg1.jpg')}
      		style={styles.container}>
      			<View style={styles.containerMain}>
        			<StatusBar
          			backgroundColor="#AD1457"
          			barStyle="light-content"
        			/>
        			<Text style={styles.title}>Daftar Kejuaraan</Text>
       				<Text style={styles.subTitle}>TAMBAH DATA KEJUARAAN</Text>
              <View style={{ backgroundColor: 'rgba(255,255,255, .4)', marginTop: 15 }}>
              <ScrollView>
       				 <Text style={styles.judul} >Nama Kejuaraan :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Nama Kejuaraan"
                  onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })}
                  value={this.state.nama}
              />
              <Text style={styles.judul} >Manufactory :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Manufactory"
                  onChangeText = {(TextInputText) => this.setState({ manufactory: TextInputText })}
                  value={this.state.manufactory}
              />
              <Text style={styles.judul} >Tracks :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Nama Tracks"
                  onChangeText = {(TextInputText) => this.setState({ tracks: TextInputText })}
                  value={this.state.tracks}
              />
              <Text style={styles.judul} >Sejarah :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Sejarah Kejuaraan"
                  onChangeText = {(TextInputText) => this.setState({ sejarah: TextInputText })}
                  value={this.state.sejarah}
              />
              <Text style={styles.judul} >Tahun Kejuaraan :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Tahun Kejuaraan"
                  onChangeText = {(TextInputText) => this.setState({ tahun: TextInputText })}
                  value={this.state.tahun}
              />
              </ScrollView>
              </View>
              <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.button}
                  onPress={this.submitData}>
                <Text style={{ fontSize: 20, color: '#fff',fontWeight: 'bold' }}>Tambah Event</Text>
              </TouchableOpacity>
              </View>

        		</View>
        		<View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={home} style={styles.menuIcon} />
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('DetailsScreen')}>
          <Image source={detail} style={styles.menuIcon} />
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('EventsScreen')}>
            <Image source={tambah} style={styles.menuIcon} />
          </TouchableOpacity>

        </View>
      		</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    width: '100%',
    height: '100%'
	},
	containerMain: {
    flex: 1,
    
  },
  title: {
    
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    paddingBottom: 5,
    textAlign: 'center',
    backgroundColor: 'rgba(76,175,80, .6)'
  },
  subTitle: {
    backgroundColor: 'rgba(76,175,80, .6)',
    color: '#fff',
    fontSize: 14,
    paddingBottom: 12,
    textAlign: 'center',
  },
  menuContainer: {
    backgroundColor: 'rgba(27,94,32, .6)',
    paddingVertical: 12,
    flexDirection: 'row',
    flex: 0.05,

  },
  menu:{
  	justifyContent: 'center',
  	alignItems: 'center',
    flex: 1 
  },
  menuIcon:{
    tintColor: '#000',
    height: 30,
    width: 30,
  },
  menuIconSelected:{
    color: '#00BCD4',
    textAlign: 'center'
  },
  isian: {
    //backgroundColor: 'rgba(255,255,255, .6)',
    width: '100%',
    padding: 10,
    fontSize: 15,
    color: '#000'
  },
  judul: {
    padding: 1, 
    fontSize: 20, 
    color: '#000', 
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    height: 35,
    width: 150,
    backgroundColor: '#01579b',
    alignItems: 'center',
    borderRadius: 12,
    margin: 10, 
    justifyContent: 'center',
  }
});

export default EventsScreen;
