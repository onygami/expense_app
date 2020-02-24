import { ChangeEvent, FormEvent, useState } from 'react'
import styled from 'styled-components'

import useSelector from '../lib/useSelector'
import SearchButton from './styles/SearchButton'
import SearchInput from './styles/SearchInput'
import { Expense } from './types'

interface SearchProps {
  setSearching: (bool: boolean) => void
  setFoundExpenses: (expenses: Expense[]) => void
}

const searchImgPath = '/images/search.svg'

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
`

const Search: React.FC<SearchProps> = ({ setSearching, setFoundExpenses }) => {
  const [searchValue, setSearchValue] = useState('')
  const { expenses } = useSelector((state) => state.expenses)

  const findExpenses = (searchTerms: string[]) =>
    expenses.filter((expense) => {
      const merchant = expense.merchant.toLowerCase(),
        first = expense.user.first.toLowerCase(),
        last = expense.user.last.toLowerCase()

      const result = searchTerms.filter(
        (term) => first.includes(term) || last.includes(term) || merchant.includes(term)
      )
      return Array.isArray(result) && result.length
    })

  const onQueryChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value.toLowerCase())
    searchValue && setSearching(false)
  }

  const onQuerySearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (searchValue) {
      const foundExpenses = findExpenses(searchValue.split(' '))
      if (Array.isArray(foundExpenses) && foundExpenses.length) {
        console.log(foundExpenses)
        setFoundExpenses(foundExpenses)
        setSearching(true)
      }
    } else {
      setSearching(false)
    }
  }

  return (
    <SearchBox onSubmit={onQuerySearch}>
      <SearchInput
        value={searchValue}
        onChange={onQueryChange}
        type="text"
        placeholder="Search for users or merchants"
      />
      <SearchButton type="submit">
        <img src={searchImgPath} />
      </SearchButton>
    </SearchBox>
  )
}

export default Search
