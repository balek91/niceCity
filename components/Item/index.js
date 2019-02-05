import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

const StyledTextArray = styled.Text
    `
fontWeight: 300;
fontSize: 16;
marginTop : 10px;
textAlign : center;
marginBottom : 10px;
`

const StyledImage = styled.Image`
 align-self: center;
 height: 100;
 width: 100;

`

const StyledViewImage = styled.View`
width : 100%;
`

const Touchable = styled.TouchableOpacity`
justifyContent: center;
alignItems: center;
backgroundColor: #F5FCFF;
border-radius:10;
border-width:0.5;
margin: 0px 5px 10px 20px;
width:40%;


`
const ViewText = styled.View`
alignItems : center;
textAlign : center;`




export default class Item extends React.Component {

    static propTypes = {
        nameArticle: PropTypes.string,
        prix: PropTypes.string,
        functionPress : PropTypes.func,
        photo : PropTypes.string,
    }


    render() {
        const { nameArticle, type, functionPress, photo } = this.props;

        return (
            <Touchable onPress={functionPress}>
                    <StyledViewImage>
                        {photo  ? (
                            <StyledImage
                                source={{uri: photo}}
                            resizeMode="stretch"
                        />
                        )
                        :
                        (
                            <StyledImage
                        source={
                            require('../../assets/images/robot-dev.png')
                        }
                    />
                        )
                        }

                    </StyledViewImage>
                    <ViewText>
                        <StyledTextArray>{`${nameArticle}`}</StyledTextArray>
                        <StyledTextArray>{`${type}`}</StyledTextArray>
                    </ViewText>
            </Touchable>
        )
    }


    
}