import React from 'react'
import { Form, FormGroup, Input } from 'reactstrap';
import DressCard from './DressCard'

const SelectedDresses = ({selectedPresentClothes, removeFromSelection, updateExistingTokens, updateNewTokens, newTokens, existingTokens})=>{
    const removeDress = (dress) => {
        if(dress.rentalDetails.type === 'new') {
            updateNewTokens({newTokens: newTokens + dress.rentalDetails.noOfTokens})
        } else {
            updateExistingTokens({existingTokens: existingTokens + dress.rentalDetails.noOfTokens})
        }
        removeFromSelection(dress)
    }
    return (
        <>
            <Form>
                <FormGroup>
                <Input type="select" name="country" id="country">
                    <option>Select Country</option>
                    <option selected>Singapore</option>
                    <option>India</option>
                    <option>Indonesia</option>
                </Input>
                </FormGroup>
                <FormGroup>
                <Input type="select" name="selectionPeriod" id="selectionPeriod">
                    <option>Select Period</option>
                    <option selected>Current Week</option>
                    <option>Next Week</option>
                </Input>
                </FormGroup>
            </Form>

            {selectedPresentClothes.map(dress => {
                const {title,image} = dress
                return (
                <DressCard
                    imgSrc={image}
                    imgAlt={title}
                    className="selected-dress"
                    onRemoveSelectedDressHandler={()=>{ removeDress(dress)}}
                />
            )})}
        </>
    )
}

export default SelectedDresses