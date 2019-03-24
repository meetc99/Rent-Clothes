import { connect } from 'react-redux'
import { removeFromSelection, } from '../actions/presentClothes'
import { updateNewTokens, updateExistingTokens } from '../actions/subscribedPlan'
import SelectedDresses from '../components/SelectedDresses';

const mapStateToProps = (state) => {
  return {
    selectedPresentClothes: state.presentClothes.selected,
    newTokens: state.subscribedPlan.newTokens,
    existingTokens: state.subscribedPlan.existingTokens,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromSelection: (dress) => {dispatch(removeFromSelection(dress))},
    updateNewTokens: (dress) => {dispatch(updateNewTokens(dress))},
    updateExistingTokens: (dress) => {dispatch(updateExistingTokens(dress))}
  }
}

const SelectedDressesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedDresses)

export default SelectedDressesContainer;