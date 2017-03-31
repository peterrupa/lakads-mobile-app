import React from 'react';
import { ScrollView, Text, KeyboardAvoidingView, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import NavBar from '../Components/NavBar';
import DropDown from '../Components/DropDown';
import HomeActions from '../Redux/HomeRedux';

// Styles
import styles from './Styles/HomeScreenStyle';

class Home extends React.Component {
  constructor () {
    super();

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress () {
    this.props.hideDropdown();
  }

  componentDidMount () {
    this.props.hideDropdown();
  }

  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={{flex: 1}}>
            <KeyboardAvoidingView behavior='position'>
              <NavBar
                showDropdown={this.props.showDropdown}
                />
            </KeyboardAvoidingView>

            <View style={{flex: 1}}>
              <Text>Recommended here</Text>

              <Text>You might also like...</Text>
            </View>

            {this.props.home.isDropdownOpen
                ? (<DropDown />)
                : (<View />)
              }
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showDropdown: () => dispatch(HomeActions.showDropdown()),
    hideDropdown: () => dispatch(HomeActions.hideDropdown())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
