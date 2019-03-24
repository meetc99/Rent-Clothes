import { connect } from 'react-redux'
import Header from '../components/Header';


const mapStateToProps = (state) => {
  return {
    existingTokens: state.subscribedPlan.existingTokens,
    newTokens: state.subscribedPlan.newTokens,
    subscriptionExpiry: state.subscribedPlan.subscriptionExpiry
  }
}

const HeaderContainer = connect(
  mapStateToProps
)(Header)

export default HeaderContainer;