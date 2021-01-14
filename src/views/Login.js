import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActionCreators from '../redux/Actions/loginaction';
import LinearGradient from 'react-native-linear-gradient';
import { Images } from '../Assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Textbox from '../component/TextBox';
import HorizontalStepper from '../component/HorizontalStepper';
import Largebutton from '../component/largebtn';
import * as NavigationService from '../Navigation/NavigationService';
import SimpleToast from 'react-native-simple-toast';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tick: true,
      nameisFocused: false,
      passwordisFocused: false,

    };
  }
  changetick() {
    this.setState({ tick: this.state.tick ? false : true })
  }
  namehandleFocus = () => this.setState({
    nameisFocused: true,
    passwordisFocused: false,
  })
  passhandleFocus = () => this.setState({
    passwordisFocused: true,
    nameisFocused: false,
  })

  next = () => {
    const { loginData } = this.props;

    if (!loginData.username) {
      SimpleToast.show("Enter User Name")

    } else if (!loginData.password) {

      SimpleToast.show("Enter password")
    } else if (this.state.tick) {

      SimpleToast.show("Agree For The Terms")
    }
    else {
      NavigationService.navigate('dashbord');

    }
  }
  render() {
    console.log(this.props);
    console.log(this.state);
    const { loginAction, loginData } = this.props;
    return (
      <SafeAreaView
        style={{ flex: 1 }}
      >
        <StatusBar backgroundColor="#191970" />
        <LinearGradient
          style={{
            flex: 1,
          }}
          start={{ x: 0.0, y: 0 }}
          end={{ x: 1.8, y: 0.1 }}
          locations={[0, 0.4, 0.6]}
          colors={['#2E2E6A', '#191970', '#191970']}>
          <Image source={Images.heaxogon} style={{ height:70, width: 70, marginTop: hp(5), alignSelf: 'center' }} />
          <Text style={{ color: 'white', fontSize: hp(4.5), alignSelf: 'center' }}> ELECTION PLUS </Text>
          <View style={{ marginHorizontal: hp(5), marginTop: hp(7) }}>
            <Textbox
              placeholder={"Text Here"}
              texthedder={"User Name"}
              handleFocus={this.namehandleFocus}
              headdersty={styles.headdersty}
              textsty={styles.textsty}
              borderhighlight={this.state.nameisFocused}
              onChangeText={(val) => loginAction.userName(val)}
              value={loginData.username}
            />

            <View style={{ marginTop: hp(2) }}>
              <Textbox
                placeholder={"Enter Here"}
                secureTextEntry={true}
                handleFocus={this.passhandleFocus}
                borderhighlight={this.state.passwordisFocused}
                texthedder={"Password"}
                headdersty={styles.headdersty}
                textsty={styles.textsty}
                onChangeText={(val) => loginAction.password(val)}
                value={loginData.password}
              />
            </View>

          </View>
          <View style={{ flexDirection: 'row', alignSelf: "center", marginTop: hp(7) }}>
            <TouchableOpacity onPress={() => this.changetick()}>
              {
                this.state.tick ?
                  <Image source={Images.boxicon} style={{ height: hp(5), width: wp(10), }} />
                  : <Image source={Images.tickbox} style={{ height: hp(5), width: wp(10), }} />
              }

            </TouchableOpacity>
            <Text style={{ alignSelf: 'center', marginLeft: wp(2), color: "white" }}> I agree the Terms & Condition</Text>
          </View>
          <Largebutton
            btntext={"Next"}
            buttonsty={styles.largebtnsty}
            onpress={this.next}
          />
          <HorizontalStepper />
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginAction: bindActionCreators(loginActionCreators, dispatch)
})
const mapStateToProps = (state) => {
  return {
    loginData: state.loginData
  }
}
const styles = StyleSheet.create({
  headdersty: {
    fontSize: hp(3.5),
    color: "gray"
  },
  textsty: {
    fontSize: hp(2),
    color: "white"
  },
  btnsty: {
    alignItems: 'center',
    height: hp(7),
    width: wp(30),
    borderRadius: hp(5),
    justifyContent: 'center',
  },
  largebtnsty: {
    alignItems: 'center',
    marginHorizontal: wp(20),
    height: hp(9),
    borderRadius: hp(5),
    justifyContent: 'center',
    marginTop: hp(2),
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login)