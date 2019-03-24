import React from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Input } from 'reactstrap'
import DressCard from './DressCard'

const SelectedDresses = ({ selectedPresentClothes, removeFromSelection, updateExistingTokens, updateNewTokens, newTokens, existingTokens }) => {
  const removeDress = (dress) => {
    if (dress.rentalDetails.type === 'new') {
      updateNewTokens({ newTokens: newTokens + dress.rentalDetails.noOfTokens })
    } else {
      updateExistingTokens({ existingTokens: existingTokens + dress.rentalDetails.noOfTokens })
    }
    removeFromSelection(dress)
  }
  return (
        <>
          <Form>
            <FormGroup>
              <Input type='select' name='country' id='country'>
                <option>Singapore</option>
                <option>India</option>
                <option>Indonesia</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Input type='select' name='selectionPeriod' id='selectionPeriod'>
                <option>Current Week</option>
                <option>Next Week</option>
              </Input>
            </FormGroup>
          </Form>

          {selectedPresentClothes.map((dress, index) => {
            const { title, image } = dress
            return (
              <DressCard
                imgSrc={image}
                imgAlt={title}
                className='selected-dress'
                onRemoveSelectedDressHandler={() => { removeDress(dress) }}
                key={`existingDresses${index}`}
              />
            )
          })}
        </>
  )
}

SelectedDresses.propTypes = {
  selectedPresentClothes: PropTypes.array.isRequired,
  removeFromSelection: PropTypes.func.isRequired,
  updateExistingTokens: PropTypes.func.isRequired,
  updateNewTokens: PropTypes.func.isRequired,
  newTokens: PropTypes.number.isRequired,
  existingTokens: PropTypes.number.isRequired
}

export default SelectedDresses
