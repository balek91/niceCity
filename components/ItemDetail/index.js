import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'
import { Dimensions } from "react-native"
import { Alert, Button } from 'react-native'
import openMap from 'react-native-open-maps';

const widthWindows = Dimensions.get("window").width

const NameArticle = styled.Text`
fontSize: 25;
marginTop : 5px;
marginBottom : 5px;
color : black;
marginLeft : 10px;
textDecoration: underline;
fontWeight : bold;
`
const Type = styled.Text`
fontSize: 25;
marginTop : 5px;
marginBottom : 5px;
color : black;
textAlign : right;
marginRight : 10px;
`

const StyledViewArray = styled.View`
justifyContent: center;
width : 90%;
backgroundColor : white;
alignItems : center;
marginLeft : 5%;
`

const StyledImage = styled.Image`
 align-self: center;
 maxHeight: 200;
 maxWidth : ${widthWindows/10*8};
`
const StyledViewImage = styled.View`
width : 80%;
backgroundColor :white;
border : black;
height : 200;
justifyContent : center;
marginTop : 10px;
`
const StyledViewStar = styled.View`
width : 100%;
justifyContent : center;
marginTop : 10px;
`

const ViewFlex = styled.View`
flex : 1;
`

const TextVote = styled.Text`
fontSize : 15;
marginTop : 5px;
textAlign : center;`

const TextDescriptionTitle = styled.Text`
fontSize : 18;
fontWeight : bold;
marginTop : 10px;
`
const TextDescription = styled.Text`
textAlign: justify;
`

const ViewDescTitle = styled.View`
alignItems : flex-start;
marginLeft : 10px;
marginRight : 10px;
marginTop : 10px;`

const ButtonReserve = styled.TouchableOpacity`
backgroundColor : #A4FFF2;
borderRadius : 50;
paddingLeft : 20px;
paddingRight : 20px;
marginBottom : 10px;
`

const TextReserve = styled.Text`
fontSize : 25;
`

const ImageTest = styled.Image``

export default class ItemDetail extends React.Component {

    static propTypes = {
        nameArticle: PropTypes.string,
        type: PropTypes.string,
        photo : PropTypes.string
    }

    render() {
        const { nameArticle, type, photo } = this.props;
console.log(photo)
        if (type == 'hotel') {
            return (
                <StyledViewArray>
                    <StyledViewImage>
                        <StyledImage
                            source={
                                require('../../assets/images/hotel.jpg')
                            }
                        />
                    </StyledViewImage>


                    <ViewFlex>
                        <NameArticle>{`${nameArticle}`}</NameArticle>
                    </ViewFlex>
                    <StyledViewStar>
                        <StyledImage
                            source={
                                require('../../assets/icons/4etoiles.png')
                            }
                        />
                    </StyledViewStar>
                    <TextVote>( 2231 votes )</TextVote>
                    <ViewDescTitle>
                        <TextDescriptionTitle>Description :</TextDescriptionTitle>
                        <TextDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                              officia deserunt mollit anim id est laborum.
                </TextDescription>
                    </ViewDescTitle>
                    <Button
                        color={'blue'}
                        onPress={this._goToYosemite}
                        title='Open in Maps' />

                    <ButtonReserve>
                        <TextReserve>
                            Book !
                        </TextReserve>
                    </ButtonReserve>
                </StyledViewArray>
            )

        }
        else if(type=='restaurant'){
            return (
                <StyledViewArray>
                                <StyledViewImage>
                                <StyledImage
                            source={
                                require('../../assets/images/restaurant.jpg')
                            }
                        />
                        </StyledViewImage>
                            
                        
                    <ViewFlex>
                        <NameArticle>{`${nameArticle}`}</NameArticle>
                    </ViewFlex>
                    <StyledViewStar>
                        <StyledImage
                            source={
                                require('../../assets/icons/4etoiles.png')
                            }
                        />
                    </StyledViewStar>
                    <TextVote>( 2231 votes )</TextVote>
                    <ViewDescTitle>
                        <TextDescriptionTitle>Description :</TextDescriptionTitle>
                        <TextDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                              officia deserunt mollit anim id est laborum.
                        </TextDescription>
                    </ViewDescTitle>
                    <Button
                        color={'blue'}
                        onPress={this._goToYosemite}
                        title='Open in Maps' />
        
                            <ButtonReserve>
                                <TextReserve>
                                    Book !
                                </TextReserve>
                            </ButtonReserve>
                </StyledViewArray>
            )
        
        }
        else if(type=='activite'){
            return (
                <StyledViewArray>
                                <StyledViewImage>
                                <StyledImage
                            source={
                                require('../../assets/images/stade.jpg')
                            }
                        />
                        </StyledViewImage>
                            
                        
                    <ViewFlex>
                        <NameArticle>{`${nameArticle}`}</NameArticle>
                    </ViewFlex>
                    <StyledViewStar>
                        <StyledImage
                            source={
                                require('../../assets/icons/4etoiles.png')
                            }
                        />
                    </StyledViewStar>
                    <TextVote>( 2231 votes )</TextVote>
                    <ViewDescTitle>
                        <TextDescriptionTitle>Description :</TextDescriptionTitle>
                        <TextDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                              officia deserunt mollit anim id est laborum.
                        </TextDescription>
                    </ViewDescTitle>
                    <Button
                        color={'blue'}
                        onPress={this._goToYosemite}
                        title='Open in Maps' />
        
                            <ButtonReserve>
                                <TextReserve>
                                    Book !
                                </TextReserve>
                            </ButtonReserve>
                </StyledViewArray>
            )
        
        }
        else {
            return (
                <StyledViewArray>
                                <StyledViewImage>
                                <StyledImage
                            source={
                                require('../../assets/images/musee.jpg')
                            }
                        />
                        </StyledViewImage>
                            
                        
                    <ViewFlex>
                        <NameArticle>{`${nameArticle}`}</NameArticle>
                    </ViewFlex>
                    <StyledViewStar>
                        <StyledImage
                            source={
                                require('../../assets/icons/4etoiles.png')
                            }
                        />
                    </StyledViewStar>
                    <TextVote>( 2231 votes )</TextVote>
                    <ViewDescTitle>
                        <TextDescriptionTitle>Description :</TextDescriptionTitle>
                        <TextDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                              officia deserunt mollit anim id est laborum.
                        </TextDescription>
                    </ViewDescTitle>
                    <Button
                        color={'blue'}
                        onPress={this._goToYosemite}
                        title='Open in Maps' />
        
                            <ButtonReserve>
                                <TextReserve>
                                    Book !
                                </TextReserve>
                            </ButtonReserve>
                </StyledViewArray>
            )
        
        }
       
    }

    addToCart = () => {
        Alert.alert('Sucess !', 'Item has add to cart')
    }
    _goToYosemite() {
        openMap({ latitude: 43.66106756624344, longitude: 7.2136030275390794 });
    }




}
