// @flow

import React, { PropTypes } from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Images } from './DevTheme'

// Examples Render Engine
import ExamplesRegistry from '../../App/Services/ExamplesRegistry'
import '../Examples/Components/animatableExample.js'
import '../Examples/Components/i18nExample.js'
import '../Examples/Components/vectorExample.js'

// Styles
import styles from './Styles/PluginExamplesScreenStyle'

class PluginExamplesScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          <View style={{alignItems: 'center', paddingTop: 60}}>
            <Image source={Images.usageExamples} style={styles.logo} />
            <Text style={styles.titleText}>Plugin Examples</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText} >
              The Plugin Examples screen is a playground for 3rd party libs and logic proofs.
              Items on this screen can be composed of multiple components working in concert.  Functionality demos of libs and practices
            </Text>
          </View>

          {ExamplesRegistry.renderPluginExamples()}

        </ScrollView>
      </View>
    )
  }
}

PluginExamplesScreen.propTypes = {
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PluginExamplesScreen)
