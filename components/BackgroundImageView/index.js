import PropTypes from 'prop-types'
import React from 'react'
import {
    View,
    ImageBackground, ScrollView
} from 'react-native'
import Header from '../Header'
import styled from 'styled-components'

const ViewEmpty = styled.View`
marginTop : 10%;`
export default class BackgroundImageView extends React.Component {

    static propTypes = {
        namePage: PropTypes.string,
        funcDef: PropTypes.func,
        isMenu: PropTypes.any
    }
    render() {
        const { namePage, funcDef, isMenu } = this.props
        return (
            <View>
                <ImageBackground source={require('../../assets/images/background2.png')} style={{ width: '100%', height: '100%' }}>

                    <View>
                        <Header titleText={namePage} funcDef={funcDef} isMenu={isMenu}></Header>
                        <ViewEmpty>

                        </ViewEmpty>
                        {this.props.children}
                    </View>
                </ImageBackground>
            </View>

        )
    }
}
