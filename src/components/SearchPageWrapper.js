import React from 'react'
import SearchPageFilterBar from 'src/components/SearchPageFilterBar.js'
import ResultsPane from 'src/components/ResultsPane.js'
import styled from 'styled-components'
import { displayFlex } from 'src/constants'

const FlexContainer = styled.div`
  ${displayFlex()}
  justify-content: center;
`

const FlexInner = styled.div`
  width: 1130px;
  padding-top: 80px;
  ${displayFlex()}
  justify-content: space-around;
`

const FilterAside = styled.div`
  width: 20%;
`

const ResultsAside = styled.div`
  width: 80%;
`

const SearchPageWrapper = (props) => (
  <FlexContainer>
    <FlexInner>
      <FilterAside>
        <SearchPageFilterBar
          {...props}
        />
      </FilterAside>
      <ResultsAside>
        <ResultsPane
          {...props}
        />
      </ResultsAside>
    </FlexInner>
  </FlexContainer>
)

export default SearchPageWrapper
