import React from 'react'
import styled from 'styled-components'
import Item from '../components/Item'
import BackgroundImageView from '../components/BackgroundImageView'
import ItemDetail from '../components/ItemDetail'

const StyledRowView = styled.View`
flex-direction : row;`

const ScrollViewCustom = styled.ScrollView`
height : 90%;`

const ViewAllItem = styled.View`
marginTop : 10px;`


export default class DetailItemScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    nameArticle : '',
    type : '', 
    photo : ''
  }

  render() {
    
    return(
    <BackgroundImageView namePage={''} funcDef={this.goBack} isMenu={false}>
    <ScrollViewCustom>
    <ItemDetail nameArticle={this.state.nameArticle} type={this.state.type} photo={this.state.photo}/>
      
      </ScrollViewCustom>


    </BackgroundImageView>
    );
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      nameArticle: navigation.getParam('nameArticle', ''),
      type: navigation.getParam('type', ''),
      photo : navigation.getParam('photo', 'https://treefurniturerental.ca/wp-content/uploads/2017/05/sorry-image-not-available.jpg')
    });
  }
  

  goToMenu = () => {
    this.props.navigation.openDrawer();
  }

  goBack = () => {
    this.props.navigation.goBack(null)
}

}
