// @flow

import React from 'react'
import { TouchableOpacity, Text, View, Modal, Navigator, Image } from 'react-native'
import styles from './Styles/DevscreensButtonStyle'
import DebugConfig from '../../App/Config/DebugConfig'
import RoundedButton from '../../App/Components/RoundedButton'
import PresentationScreen from './PresentationScreen'
import { Images } from './DevTheme'

type FullButtonProps = {
  styles?: Object
};

export default class DevscreensButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  render () {
    if (DebugConfig.showDevScreens) {
      return (
        <View>
          <RoundedButton onPress={this.toggleModal}>
            Open DevScreens
          </RoundedButton>
          <Modal visible={this.state.showModal} >
            <PresentationScreen screenProps={
              // Accessible via this.screenProps.toggle on all screens
              {toggle: this.toggleModal}
            }/>
          </Modal>
        </View>
      )
    } else {
      return (<View />)
    }
  }
}
