import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../component/headder';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Textbox from '../component/TextBox';
import Largebutton from '../component/largebtn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as settingActionCreators from '../redux/Actions/settingaction';
import LinearGradient from 'react-native-linear-gradient';
import * as NavigationService from '../Navigation/NavigationService';
import SimpleToast from 'react-native-simple-toast';
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {

      isfocusname: false,
      isfocusvoterid: false,
      isfocusmobile: false,
      isfocusaddress: false,
    };
    this.heightlightname = this.heightlightname.bind(this);
    this.heightlightvoterid = this.heightlightvoterid.bind(this);
    this.heightlightmobile = this.heightlightmobile.bind(this);
    this.heightlightaddress = this.heightlightaddress.bind(this);
  }
  heightlightname() {
    this.setState({
      isfocusname: true,
      isfocusvoterid: false,
      isfocusmobile: false,
      isfocusaddress: false,
    })
  }
  heightlightvoterid() {

    this.setState({
      isfocusname: false,
      isfocusvoterid: true,
      isfocusmobile: false,
      isfocusaddress: false,
    })
  }
  heightlightmobile() {
    this.setState({
      isfocusname: false,
      isfocusvoterid: false,
      isfocusmobile: true,
      isfocusaddress: false,
    })
  }
  heightlightaddress() {
    this.setState({
      isfocusname: false,
      isfocusvoterid: false,
      isfocusmobile: false,
      isfocusaddress: true,
    })
  }
  upload = () => {
    const { SettingsAction, settingData } = this.props;

    if (!settingData.username) {
      SimpleToast.show("Enter User Name")

    } else if (!settingData.voter_id) {

      SimpleToast.show("Enter voterid")
    } else if (!settingData.mobilenum) {

      SimpleToast.show("Enter Mobile Number")
    }
    else if (!settingData.address) {

      SimpleToast.show("Enter Address")
    }

    else {
      if (settingData.mobilenum.length < 10) {

        SimpleToast.show("Enter Valid Mobile Number")
      } else {

        SettingsAction.reset()
        SimpleToast.show("Upload sucess")
      }

    }
  }
  render() {
    console.log(this.state);
    console.log(this.props);
    const { SettingsAction, settingData } = this.props;
    return (
      <View style={styles.continer}>
        <Header
          navigation={this.props}
          data={11} />
        <View style={{ marginHorizontal: wp(7) }}>
          <Text style={{ color: "white", fontSize: hp(3.5) }}>
            Details
          </Text>
          <LinearGradient
            style={{
              padding: hp(3),
              marginTop: hp(4),
              borderRadius: hp(1)
            }}

            start={{ x: 1, y: 0 }}
            end={{ x: 1.8, y: 1.8 }}
            locations={[0, 0.8, 0.6]}
            colors={['#0D0D30', '#454552', '#454552']}>
            <ScrollView style={{ height: hp(45) }}
              showsVerticalScrollIndicator={false}
            >
              <Textbox
                headdersty={styles.headdersty}
                placeholder={"Text Here"}
                texthedder={"Name"}
                textsty={styles.textsty}
                handleFocus={this.heightlightname}
                borderhighlight={this.state.isfocusname}
                onChangeText={(val) => SettingsAction.userName(val)}
                value={settingData.username}
              />
              <Textbox
                texthedder={"Vote Id"}
                placeholder={"Text Here"}
                headdersty={styles.headdersty}
                textsty={styles.textsty}
                handleFocus={this.heightlightvoterid}
                borderhighlight={this.state.isfocusvoterid}
                onChangeText={(val) => SettingsAction.voter_id(val)}
                value={settingData.voter_id}
              />
              <Textbox
                texthedder={"Mobile Number"}
                placeholder={"Text Here"}
                headdersty={styles.headdersty}
                textsty={styles.textsty}
                handleFocus={this.heightlightmobile}
                borderhighlight={this.state.isfocusmobile}
                onChangeText={(val) => SettingsAction.mobile(val)}
                value={settingData.mobilenum}
                keyboardType={'number-pad'}
              />
              <Textbox
                texthedder={"Address"}
                placeholder={"Text Here"}
                headdersty={styles.headdersty}
                textsty={styles.textsty}
                handleFocus={this.heightlightaddress}
                borderhighlight={this.state.isfocusaddress}
                onChangeText={(val) => SettingsAction.address(val)}
                value={settingData.address}
              />
              <Textbox
                texthedder={"Family Member"}
                placeholder={"Text Here"}
                secureTextEntry={true}
                headdersty={styles.headdersty}
                textsty={styles.textsty}
                onlytitle={true}
              />
              <View style={{ flexDirection: 'row' }}>

                <View style={styles.smallroundtext}>
                  <Text>1</Text>
                </View>
                <View style={styles.smallroundtext}>
                  <Text>2</Text>
                </View>
                <View style={styles.smallroundtext}>
                  <Text>3</Text>
                </View>
                <View style={styles.smallroundtext}>
                  <Text>4</Text>
                </View>

              </View>
              {/* </View> */}
            </ScrollView>
          </LinearGradient>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(1), marginHorizontal: wp(3) }}>
            <TouchableOpacity style={styles.roundtextview}>
              <Text style={styles.roundtext}>Positive</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundtextview}>
              <Text style={styles.roundtext}>Negative</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundtextview}>
              <Text style={styles.roundtext}>Not Sure</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.roundtextview, { alignSelf: 'center', padding: hp(0.5), marginTop: hp(1) }]}>
            <Text style={styles.roundtext}>any complaint/sugession</Text>
          </TouchableOpacity>
          <Largebutton
            onpress={this.upload}
            btntext={'UPDATE'}
            buttonsty={styles.largebtnsty}
          />
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  SettingsAction: bindActionCreators(settingActionCreators, dispatch)
})
const mapStateToProps = (state) => {
  return {
    settingData: state.settingData
  }
}
const styles = StyleSheet.create({

  continer: {
    flex: 1,
    backgroundColor: "#9430D9"
  },
  headdersty: {
    fontSize: hp(3.5),
    color: "white"
  },
  textsty: {
    // borderBottomWidth: 1.5,
    fontSize: hp(2),
    color: 'white'
  },
  smallroundtext: {
    height: 17, width: 17,
    borderRadius: 8.5,
    backgroundColor: 'white',
    alignItems: 'center',
    marginRight: hp(1)
  },
  roundtext: {
    fontSize: hp(2),
    color: "white"
  },
  roundtextview: {
    padding: hp(0.5),

    backgroundColor: '#0D0D30',
    borderRadius: hp(3),
    paddingHorizontal: wp(2.5)

  }, largebtnsty: {
    alignItems: 'center',
    backgroundColor: 'black',
    marginHorizontal: wp(10),
    height: hp(5),
    borderRadius: hp(5),
    justifyContent: 'center',
    marginTop: hp(2)
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
