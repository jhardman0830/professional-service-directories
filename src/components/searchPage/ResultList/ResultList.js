import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ResultCard from 'src/components/searchPage/ResultCard'

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
const averageReview = reviews => {
  const total = reviews.reduce( (prev, current) => {
    return prev + current.rating
  }, 0)

  return reviews.length ? total/reviews.length : null
}

const ResultList = ({ data: { allDentists=[] } }) => (
  <List>
    {
      allDentists.map( (dentist, i) =>
        <ResultCard
          key={i}
          name={dentist.name}
          rating={averageReview(dentist.reviews)}
        />
      )
    }
  </List>
)

ResultList.propTypes = {
  data:         PropTypes.object
}

export default ResultList
