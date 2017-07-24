import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import SearchDropdown from 'src/components/SearchDropdown'
import styled from 'styled-components'
import { colors, shadow, displayFlex } from 'src/constants'

const StyledFilterBar = styled.div`
  ${shadow}
  margin-left: 12px;
  margin-right: 12px;
`

const FilterWrapper = styled.div`
  ${ displayFlex() }
  background: ${colors.darkGrey};
  justify-content: center;
  align-items: center;
  padding: 12px;
`

const SearchPageFilterBar = ({
  data: {
    allCities=[],
    allInsurances=[],
    allVisitReasons=[]
  },
  cityValue,
  insuranceValue,
  visitReasonValue,
  update
}) => (
  <StyledFilterBar>
    <FilterWrapper>
      <SearchDropdown
        placeholder='City'
        filterKey='city'
        value={cityValue}
        onChange={update}
        options={allCities}
      />
    </FilterWrapper>
    <FilterWrapper>
      <SearchDropdown
        placeholder='Insurance Provider'
        filterKey='insurance'
        value={insuranceValue}
        onChange={update}
        options={allInsurances}
      />
    </FilterWrapper>
    <FilterWrapper>
      <SearchDropdown
        placeholder='Reason for Visit'
        filterKey='reason'
        value={visitReasonValue}
        onChange={update}
        options={allVisitReasons}
      />
    </FilterWrapper>
  </StyledFilterBar>
)

SearchPageFilterBar.propTypes = {
  data:             PropTypes.shape({
                      allCities:        PropTypes.arrayOf(
                                          PropTypes.object
                                        ),
                      allInsurances:    PropTypes.arrayOf(
                                          PropTypes.object
                                        ),
                      allVisitReasons:  PropTypes.arrayOf(
                                          PropTypes.object
                                        ),
                    }),
  cityValue:        PropTypes.string,
  insuranceValue:   PropTypes.string,
  visitReasonValue: PropTypes.string,
  update:           PropTypes.func
}

export default graphql(gql`
  query {
    allCities {
      name,
      id
    },
    allInsurances {
      name,
      id
    },
    allVisitReasons {
      name,
      id
    }
  }
`)(SearchPageFilterBar)
