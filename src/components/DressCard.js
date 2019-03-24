import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const DressCard = ({ className, onRemoveSelectedDressHandler, imgSrc, imgAlt, selectedBySelf = false, onShortlistHandler, onSelectHandler, isSelected, isShortlisted, isAvailable = true }) => {
  const cardCss = classnames({
    selected: isSelected && !selectedBySelf,
    'not-available': !isAvailable
  })

  return (
    <div className={`dress-card ${cardCss} ${className}`}>
      <img
        className='rounded img-fluid dress-img'
        alt={imgAlt}
        src={imgSrc}
      />

      {onSelectHandler && <a onClick={onSelectHandler} className='dress-icon select-icon'>
        <i className={`fa-check-circle ${isSelected && selectedBySelf ? 'fas' : 'far'}`} />
      </a>}
      {onShortlistHandler && <a onClick={onShortlistHandler} className='dress-icon shortlist-icon'>
        <i className={`fa-heart ${isShortlisted ? 'fas' : 'far'}`} />
      </a>}
      {onRemoveSelectedDressHandler && <a onClick={onRemoveSelectedDressHandler} className='dress-icon shortlist-icon'>
        <i className={`fa-times fas`} />
      </a>}
    </div>
  )
}

DressCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onRemoveSelectedDressHandler: PropTypes.func,
  onShortlistHandler: PropTypes.func,
  onSelectHandler: PropTypes.func,
  selectedBySelf: PropTypes.bool,
  isSelected: PropTypes.bool,
  isShortlisted: PropTypes.bool,
  isAvailable: PropTypes.bool
}

export default DressCard
