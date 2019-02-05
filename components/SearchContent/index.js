import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import RadioForm from 'react-native-simple-radio-button'
import CheckBox from 'react-native-check-box'


const ViewGlobal = styled.View`
backgroundColor : white;
alignItems : center;
paddingBottom : 10px;
`

const TextSearch = styled.Text`
textAlign : center;
fontSize : 18;
fontWeight : bold;
marginTop : 10px;`

const TextFilter = styled.Text`
color : blue;`

const Touchable = styled.TouchableOpacity``

const SearchBar = styled.TextInput`
margin : 5px 0px 5px 10px;

`
const SearchView = styled.View`
width : 80%;
marginTop : 10px;
borderRadius : 100;
border : black;
`

const ViewRadioFrom = styled.View`
marginTop : 10px;`

const ViewCheckBox = styled.View`
flexDirection : row;`

const TextCheckBox = styled.Text`
fontSize : 18;
`

const TextNameCheckBox = styled.Text`
fontSize : 16;
fontWeight : bold;
marginTop : 10px;
marginBottom : 10px;
`

const ViewLeft = styled.View`
flex : 1;
marginLeft : 12%;
`

const ViewRight = styled.View`
flex : 1;
`

const ViewRow = styled.View`
flexDirection : row;
`

const radio_props = [
    { label: 'Localisation  ', value: 0 },
    { label: 'Opinions  ', value: 1 },
    { label: 'Both', value: 2 }
];
export default class SearchContent extends React.Component {


    static propTypes = {

    }

    state = {
        HotelCheck: false,
        RestaurantCheck: false,
        MuseeCheck: false,
        ActiviteCheck: false
    }

    render() {
        return (
            <ViewGlobal>
                <TextSearch>
                    Search Parameters :
                </TextSearch>
                <ViewRadioFrom>
                    <RadioForm
                        radio_props={radio_props}
                        initial={2}
                        onPress={(value) => { this.setState({ value: value }) }}
                        labelHorizontal={true}
                        formHorizontal={true}
                        buttonSize={7}
                    />
                </ViewRadioFrom>
                <SearchView>
                    <SearchBar placeholder={'search ...'}></SearchBar>
                </SearchView>
                <TextNameCheckBox>Choice Criteria(s) :</TextNameCheckBox>
                <ViewRow>
                    <ViewLeft>
                        <ViewCheckBox>
                            <CheckBox
                                onClick={() => {
                                    this.setState({
                                        HotelCheck: !this.state.HotelCheck
                                    })
                                }}
                                isChecked={this.state.HotelCheck}
                            />
                            <TextCheckBox>
                                Hotels
                    </TextCheckBox>
                        </ViewCheckBox>
                    </ViewLeft>
                    <ViewRight>
                        <ViewCheckBox>
                            <CheckBox
                                onClick={() => {
                                    this.setState({
                                        RestaurantCheck: !this.state.RestaurantCheck
                                    })
                                }}
                                isChecked={this.state.RestaurantCheck}
                            />
                            <TextCheckBox>
                                Restaurants
                    </TextCheckBox>
                        </ViewCheckBox>
                    </ViewRight>

                </ViewRow>
                <ViewRow>
                    <ViewLeft>


                        <ViewCheckBox>
                            <CheckBox
                                onClick={() => {
                                    this.setState({
                                        MuseeCheck: !this.state.MuseeCheck
                                    })
                                }}
                                isChecked={this.state.MuseeCheck}
                            />
                            <TextCheckBox>
                                Museums
                    </TextCheckBox>
                        </ViewCheckBox>
                    </ViewLeft>
                    <ViewRight>
                        <ViewCheckBox>
                            <CheckBox
                                onClick={() => {
                                    this.setState({
                                        ActiviteCheck: !this.state.ActiviteCheck
                                    })
                                }}
                                isChecked={this.state.ActiviteCheck}
                            />
                            <TextCheckBox>
                                Activities
                    </TextCheckBox>
                        </ViewCheckBox>
                    </ViewRight>
                </ViewRow>
            </ViewGlobal>
        );
    }

}