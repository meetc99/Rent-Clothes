import React from 'react'
import { TabContent, TabPane, Nav, Row, Col } from 'reactstrap'
import TabNavItem from './TabNavItem'
import DressCard from './DressCard'
import SelectedDresses from '../containers/SelectedDressesConnected'

export default class MainSection extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.shortlistDress = this.shortlistDress.bind(this)
    this.selectDress = this.selectDress.bind(this)
    this.state = {
      activeTab: 'new'
    }
  }

  toggle (tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  shortlistDress (dress, dressType) {
    const { updateNewDress, updateExistingDress } = this.props
    dress.shortlisted = !dress.shortlisted
    if (dressType === 'new') {
      updateNewDress(dress)
    } else {
      updateExistingDress(dress)
    }
  }

  selectDress (dress, dressType) {
    const {
      addToSelection,
      removeFromSelection,
      updateNewDress,
      updateNewTokens,
      newTokens,
      updateExistingDress,
      existingTokens,
      updateExistingTokens
    } = this.props
    if (dress.selected && !dress.selectedBySelf) {
      window.alert('You cannot select this dress as it has been selected by someone else.')
      return
    }

    if (!dress.isAvailable && dressType === 'existing') {
      window.alert('You cannot select this dress as it is not available')
      return
    }

    dress.selected = !dress.selected
    dress.selectedBySelf = !dress.selectedBySelf

    if (dress.selected) {
      addToSelection(dress)
    } else {
      removeFromSelection(dress)
    }

    if (dressType === 'new') {
      updateNewDress(dress)
      const tokenValue = dress.selected ? newTokens - dress.rentalDetails.noOfTokens : newTokens + dress.rentalDetails.noOfTokens
      updateNewTokens({ newTokens: tokenValue })
    } else {
      updateExistingDress(dress)
      const tokenValue = dress.selected ? existingTokens - dress.rentalDetails.noOfTokens : existingTokens + dress.rentalDetails.noOfTokens
      updateExistingTokens({ existingTokens: tokenValue })
    }
  }

  render () {
    const { newClothes, existingClothes } = this.props
    const { activeTab } = this.state

    return (
      <div className='container-fluid main'>
        <Row>
          <Col className='col-12 col-md-8'>
            <Nav tabs>
              <TabNavItem
                label={'New'}
                activeTab={activeTab === 'new'}
                onClickHandler={() => { this.toggle('new') }}
              />
              <TabNavItem
                label={'Existing'}
                activeTab={activeTab === 'existing'}
                onClickHandler={() => { this.toggle('existing') }}
              />
            </Nav>

            <TabContent activeTab={activeTab}>
              <TabPane tabId='new'>
                <Row>
                  <Col>
                    {newClothes.map((dress) => {
                      const { title, image, selected, shortlisted,
                        selectedBySelf } = dress
                      return (
                        <DressCard
                          imgSrc={image}
                          imgAlt={title}
                          isSelected={selected}
                          isShortlisted={shortlisted}
                          onShortlistHandler={() => { this.shortlistDress(dress, 'new') }}
                          onSelectHandler={() => { this.selectDress(dress, 'new') }}
                          selectedBySelf={selectedBySelf}
                        />)
                    })}
                  </Col>
                </Row>
              </TabPane>

              <TabPane tabId='existing'>
                {existingClothes.map((dress) => {
                  const { title, image, selected, shortlisted, isAvailable, selectedBySelf } = dress
                  return (
                    <DressCard
                      isAvailable={isAvailable}
                      imgSrc={image}
                      imgAlt={title}
                      isSelected={selected}
                      isShortlisted={shortlisted}
                      onShortlistHandler={() => { this.shortlistDress(dress, 'existing') }}
                      onSelectHandler={() => { this.selectDress(dress, 'existing') }}
                      selectedBySelf={selectedBySelf}
                    />)
                })}
              </TabPane>
            </TabContent>
          </Col>

          <Col className='col-12 col-md-4'>
            <SelectedDresses />
          </Col>
        </Row>

      </div>
    )
  }
}
