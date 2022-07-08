import React from 'react'
import { Text, FlatList } from 'react-native'
import { useQuery, gql } from '@apollo/client'

const GET_COUNTRIES = gql`
  query countries {
    countries(filter: { continent: { eq: "NA" } }) {
      name
    }
  }
`

const Countries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES)
      
  if (loading) return <Text>Loading...</Text>

  if (error) return <Text>Error loading countries</Text>
  
  return (
    <FlatList
      data={data.countries}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  )
}

export default Countries