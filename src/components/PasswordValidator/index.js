import {useState} from 'react'

import {
  PasswordMainContainer,
  PasswordCardContainer,
  ValidatorContainer,
  HeadingText,
  TaglineText,
  InputElement,
  ErrorLine,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangeInputElement = event => setPassword(event.target.value)

  const errorLineText =
    password.length > 8 ? '' : 'Your password must be at least 8 characters'

  return (
    <PasswordMainContainer>
      <PasswordCardContainer>
        <ValidatorContainer>
          <HeadingText>Password Validator</HeadingText>
          <TaglineText>
            Check how strong and secure is your password
          </TaglineText>
          <InputElement
            type="password"
            value={password}
            onChange={onChangeInputElement}
          />
          <ErrorLine>{errorLineText}</ErrorLine>
        </ValidatorContainer>
      </PasswordCardContainer>
    </PasswordMainContainer>
  )
}

export default PasswordValidator
