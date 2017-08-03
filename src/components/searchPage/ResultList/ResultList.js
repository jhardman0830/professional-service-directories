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

const ResultList = ({
  practices: {
    allPractices=[]
  }
}) => (
  <List>
    {
      allPractices.length > 0 &&
        allPractices.map( (dentist, i) =>
          <ResultCard
            key={i}
            name={dentist.name}
            rating={averageReview(dentist.reviews)}
            image={dentist.file ? `https://images.graph.cool/v1/cj590hy2dfdtl0105kwjxsfpv/${dentist.file.secret}/500x` : ''}
          />
        )
    }
    {
      allPractices.length == 0 &&
        <span>No results found</span>
    }
  </List>
)

ResultList.propTypes = {
  practices:  PropTypes.object
}

export default ResultList