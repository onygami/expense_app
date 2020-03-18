import styled from 'styled-components'

import ColorThemeSelector from './ColorThemeSelector'
import LanguageSelector from './LanguageSelector'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1em;
  width: 60%;
  margin: 0 auto;
  background: ${(props) => props.theme.bgColor};
  flex-basis: content;
  @media only screen and (max-width: 1052px) {
    width: 80%;
  }
`

const Header: React.FC<any> = ({ setTheme }) => {
  return (
    <Wrapper>
      <ColorThemeSelector setTheme={setTheme} />
      <LanguageSelector />
    </Wrapper>
  )
}

export default Header
