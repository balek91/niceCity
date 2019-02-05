import React from 'react'
import styled from 'styled-components'
import Item from '../components/Item'
import BackgroundImageView from '../components/BackgroundImageView'
import SearchContent from '../components/SearchContent'

const StyledRowView = styled.View`
flex-direction : row;`

const ScrollViewCustom = styled.ScrollView`
height : 90%;`

const ViewAllItem = styled.View`
marginTop : 10px;`


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return(
    <BackgroundImageView namePage={''} funcDef={this.goToMenu} isMenu={true}>
    <ScrollViewCustom>
      <SearchContent></SearchContent>
      <ViewAllItem>
        <StyledRowView>
            <Item nameArticle={'Hotel Vendome'} type={'Hotel'} photo={'https://www.ahstatic.com/photos/7205_ho_00_p_2048x1536.jpg'} functionPress={() => this.goToDetail('Hotel Vendome' , 'hotel' ,'https://www.ahstatic.com/photos/7205_ho_00_p_2048x1536.jpg')} ></Item>
            <Item nameArticle={'La Réserve de Nice'}  type={'Restaurant'} photo={'https://media-cdn.tripadvisor.com/media/photo-s/0f/a9/7a/3a/samsara-restaurant.jpg'} functionPress={() => this.goToDetail('La Réserve de Nice' , 'restaurant', 'https://media-cdn.tripadvisor.com/media/photo-s/0f/a9/7a/3a/samsara-restaurant.jpg' )}></Item>
          </StyledRowView>
          <StyledRowView>
            <Item nameArticle={'Hotel Nice Rivera'}  type={'Hotel'} photo={'https://www.ahstatic.com/photos/7205_ho_00_p_2048x1536.jpg'} functionPress={() => this.goToDetail('Hotel Nice Rivera' , 'hotel', 'https://www.ahstatic.com/photos/7205_ho_00_p_2048x1536.jpg' )}></Item>
            <Item nameArticle={'Allianz Riviera'} type={'Activite'} photo= {'http://files.ogcnice.com/images/pages/stade/visu-stade-2-1200x667.jpg'} functionPress={() => this.goToDetail('Allianz Riviera' , 'activite', 'http://files.ogcnice.com/images/pages/stade/visu-stade-2-1200x667.jpg' )}></Item>
          </StyledRowView>
          <StyledRowView>
            <Item nameArticle={'Musée Matisse'} type={'Musee'} photo={'http://www.musee-matisse-nice.org/img/FacadeMuseeMatisse.jpg'} functionPress={() => this.goToDetail('Musée Matisse' , 'musee' , 'http://www.musee-matisse-nice.org/img/FacadeMuseeMatisse.jpg')}></Item>
            <Item nameArticle={'Les Sens'} type={'Restaurant'} photo={'https://media-cdn.tripadvisor.com/media/photo-s/0f/a9/7a/3a/samsara-restaurant.jpg'} functionPress={() => this.goToDetail('Les Sens' , 'restaurant', 'https://media-cdn.tripadvisor.com/media/photo-s/0f/a9/7a/3a/samsara-restaurant.jpg' )}></Item>
          </StyledRowView>
      </ViewAllItem>
      </ScrollViewCustom>


    </BackgroundImageView>
    );
  }

  goToDetail = (article,type, photo) => {
    this.props.navigation.push('DetailItem',{
      nameArticle: article,
      type: type,
      photo :photo
    })
  }

  goToMenu = () => {
    this.props.navigation.openDrawer();
  }

  goBack = () => {
    this.props.navigation.goBack(null)
}

}
