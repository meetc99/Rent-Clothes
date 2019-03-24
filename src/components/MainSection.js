import React from "react";
import { TabContent, TabPane, Nav, Row, Col } from 'reactstrap';
import TabNavItem from './TabNavItem'
import DressCard from './DressCard'
import SelectedDresses from "../containers/SelectedDressesConnected";

export default class MainSection extends React.Component {

    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.shortlistDress = this.shortlistDress.bind(this);
      this.selectDress = this.selectDress.bind(this);
      this.state = {
        activeTab: 'new'
      };
    }
  
    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }

    shortlistDress(dress, dressType) {
      dress.shortlisted = !dress.shortlisted;
      if(dressType === 'new') {
        this.props.updateNewDress(dress)
      } else {
        this.props.updateExistingDress(dress)
      }
    }

    selectDress(dress, dressType) {
      if (dress.selected && !dress.selectedBySelf) {
        alert('You cannot select this dress as it has been selected by someone else.')
        return;
      }
      
      if(!dress.isAvailable && dressType === 'existing') {
        alert('You cannot select this dress as it is not available')
        return;
      }

      dress.selected = !dress.selected;
      dress.selectedBySelf = !dress.selectedBySelf;

      if(dress.selected) {
        this.props.addToSelection(dress)
      } else {
        this.props.removeFromSelection(dress)
      }

      if(dressType === 'new') {
        this.props.updateNewDress(dress)
        const tokenValue = dress.selected ? this.props.newTokens - dress.rentalDetails.noOfTokens : this.props.newTokens + dress.rentalDetails.noOfTokens ;
        this.props.updateNewTokens({newTokens:tokenValue})
      } else {
        this.props.updateExistingDress(dress)
        const tokenValue = dress.selected ? this.props.existingTokens - dress.rentalDetails.noOfTokens : this.props.existingTokens + dress.rentalDetails.noOfTokens ;
        this.props.updateExistingTokens({existingTokens:tokenValue})
      }
      
    }

    render() {
      const {newClothes, existingClothes} = this.props;

      return (
        <div className="container-fluid main">
          <Row>
            <Col className="col-12 col-md-8">
              <Nav tabs>
                <TabNavItem 
                  label={"New"}
                  activeTab={this.state.activeTab === 'new'}
                  onClickHandler={() => { this.toggle('new'); }}
                />
                <TabNavItem 
                  label={"Existing"}
                  activeTab={this.state.activeTab === 'existing'}
                  onClickHandler={() => { this.toggle('existing'); }}
                />
              </Nav>

              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="new">
                  <Row>
                    <Col>
                      {newClothes.map((dress)=>{
                        const {title,image,selected,shortlisted, 
                          selectedBySelf} = dress;
                        return (
                          <DressCard
                            imgSrc={image}
                            imgAlt={title}
                            isSelected={selected}
                            isShortlisted={shortlisted}
                            onShortlistHandler={()=>{this.shortlistDress(dress, 'new')}}
                            onSelectHandler={()=>{this.selectDress(dress, 'new')}}
                            selectedBySelf={selectedBySelf}
                          />)
                      })}
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="existing">
                  {existingClothes.map((dress)=>{
                    const {title,image,selected,shortlisted, isAvailable, selectedBySelf} = dress;
                    return (
                      <DressCard
                        isAvailable={isAvailable}
                        imgSrc={image}
                        imgAlt={title}
                        isSelected={selected}
                        isShortlisted={shortlisted}
                        onShortlistHandler={()=>{this.shortlistDress(dress, 'existing')}}
                        onSelectHandler={()=>{this.selectDress(dress, 'existing')}}
                        selectedBySelf={selectedBySelf}
                      />)
                  })}
                </TabPane>
              </TabContent>
            </Col>

            <Col className="col-12 col-md-4">
              <SelectedDresses />
            </Col>
          </Row>

        </div>
      );
    }
  }