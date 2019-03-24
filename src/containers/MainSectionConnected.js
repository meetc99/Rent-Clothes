import { connect } from 'react-redux'
import { updateExistingDress, updateNewDress, addToSelection, removeFromSelection } from '../actions/presentClothes'
import { updateNewTokens, updateExistingTokens } from '../actions/subscribedPlan'
import MainSection from '../components/MainSection';

const mapStateToProps = (state) => {
  return {
    newClothes: state.presentClothes.new,
    existingClothes: state.presentClothes.existing,
    existingTokens: state.subscribedPlan.existingTokens,
    newTokens: state.subscribedPlan.newTokens,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewDress: (dress) => {dispatch(updateNewDress(dress))},
    updateExistingDress: (dress) => {dispatch(updateExistingDress(dress))},
    addToSelection: (dress) => {dispatch(addToSelection(dress))},
    removeFromSelection: (dress) => {dispatch(removeFromSelection(dress))},
    updateNewTokens: (dress) => {dispatch(updateNewTokens(dress))},
    updateExistingTokens: (dress) => {dispatch(updateExistingTokens(dress))}
  }
}
const MainSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)

export default MainSectionContainer;