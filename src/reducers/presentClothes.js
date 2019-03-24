import { handleActions } from 'redux-actions'
import { updateNewDress, updateExistingDress, addToSelection, removeFromSelection } from '../actions/presentClothes'

const defaultState = {
    existing: [
        {
            id: 1,
            title: 'Long dress',
            image: 'https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/45/466/2747/102/2/665935300/665935300_1_360x464.jpg',
            colors: ['red'],
            gender: 'female',
            rentalDetails: {
                noOfTokens: 10,
                type: 'existing'
            },
            isAvailable: true,
            selectedBySelf:false,
            selected: true,
            shortlisted: false
        },
        {
            id: 2,
            title: 'Jacket, Jeans & Shirt',
            image: 'https://cdn.shopify.com/s/files/1/0388/0957/products/american-made-jacket-brown-duck-made-in-usa-hood-round-house_1024x1024.jpg?v=1406773071',
            colors: ['tan', 'red', 'blue', 'black'],
            gender: 'male',
            rentalDetails: {
                noOfTokens: 15,
                type: 'existing'
            },
            isAvailable: true,
            selectedBySelf:false,
            selected: false,
            shortlisted: true
        },
        {
            id: 3,
            title: 'Long dress',
            image: 'https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/45/466/2747/102/2/665935300/665935300_1_360x464.jpg',
            colors: ['red'],
            gender: 'female',
            rentalDetails: {
                noOfTokens: 8,
                type: 'existing'
            },
            isAvailable: false,
            selectedBySelf:false,
            selected: false,
            shortlisted: false
        },
        {
            id: 4,
            title: 'Jacket, Jeans & Shirt',
            image: 'https://cdn.shopify.com/s/files/1/0388/0957/products/american-made-jacket-brown-duck-made-in-usa-hood-round-house_1024x1024.jpg?v=1406773071',
            colors: ['tan', 'red', 'blue', 'black'],
            gender: 'male',
            rentalDetails: {
                noOfTokens: 20,
                type: 'existing'
            },
            isAvailable: true,
            selectedBySelf:false,
            selected: false,
            shortlisted: true
        },
    ],
    new:[
        {
            id: 12,
            title: 'Jean Top',
            image: 'https://dkangelette.com/wp-content/uploads/2017/06/6985TW_DENIM_01.jpg',
            colors: ['blue'],
            gender: 'female',
            rentalDetails: {
                noOfTokens: 300,
                type: 'new'
            },
            selectedBySelf:false,
            selected: false,
            shortlisted: false
        },
        {
            id: 6,
            title: 'Yellow Dress',
            image: 'https://media.missguided.co.uk/image/upload/v1536230811/dresses_AUS_x8m2ee.jpg',
            colors: ['yellow'],
            gender: 'female',
            rentalDetails: {
                noOfTokens: 125,
                type: 'new'
            },
            selectedBySelf:false,
            selected: false,
            shortlisted: true
        },
        {
            id: 8,
            title: 'Yellow Dress',
            image: 'https://media.missguided.co.uk/image/upload/v1536230811/dresses_AUS_x8m2ee.jpg',
            colors: ['yellow'],
            gender: 'female',
            rentalDetails: {
                noOfTokens: 100,
                type: 'new'
            },
            selectedBySelf:false,
            selected: true,
            shortlisted: true
        },
        {
            id: 5,
            title: 'Men Shirt',
            image: 'https://www.vermontgear.com/mm5/graphics/00000006/103348220_640x640.jpeg',
            colors: ['brown'],
            gender: 'male',
            rentalDetails: {
                noOfTokens: 600,
                type: 'new'
            },
            selectedBySelf:true,
            selected: true,
            shortlisted: false
        },
        


    ],
    selected: [
        {
            id: 5,
            title: 'Men Shirt',
            image: 'https://www.vermontgear.com/mm5/graphics/00000006/103348220_640x640.jpeg',
            colors: ['brown'],
            gender: 'male',
            rentalDetails: {
                noOfTokens: 600,
                type: 'new'
            },
            isAvailable: true,
            selectedBySelf:true,
            selected: true,
            shortlisted: false
        }

    ]
}

const presentClothesReducer = handleActions({
        [updateNewDress]: (state, {payload: currentDress}) => {
            const updatedDresses = state.new.map(dress => {
                return dress.id !== currentDress.id ? dress : currentDress
            })
            return { 
                ...state,
                new: [...updatedDresses]
            }
        },
        [updateExistingDress]: (state, {payload: currentDress}) => {
            const updatedDresses = state.existing.map(dress => {
                return dress.id !== currentDress.id ? dress : currentDress
            })
            return { 
                ...state,
                existing: [...updatedDresses]
            }
        },
        [addToSelection]: (state, {payload: selectedDress}) => {
            return { 
                ...state,
                selected: [...state.selected, selectedDress]
            }
        },
        [removeFromSelection]: (state, {payload: selectedDress}) => {
            const updatedSelectedDresses = state.selected.filter(dress => {
                return dress.id !== selectedDress.id
            })
            const updatedDressesStatus = state[selectedDress.rentalDetails.type].map(dress => {
                if(selectedDress.id === dress.id) {
                    dress.selected = false
                    dress.selectedBySelf = false
                }
                return dress
            });
            return { 
                ...state,
                selected: [...updatedSelectedDresses],
                [selectedDress.rentalDetails.type]: [...updatedDressesStatus]
            }
        },
    },
    defaultState
);

export default presentClothesReducer