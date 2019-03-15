import React from 'react'

import Filter from '../components/Filter'

const FilterContainer = props => {
  return (
    <Filter
      handleHogs={props.handleHogs}
      handleFilter={props.handleFilter}
      handleGrease={props.handleGrease}
      resetHogs={props.resetHogs}
    />
  )
}

export default FilterContainer
