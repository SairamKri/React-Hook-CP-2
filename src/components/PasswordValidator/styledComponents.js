import styled from 'styled-components'

export const PasswordMainContainer = styled.div`
  background-color: #383a4e;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PasswordCardContainer = styled.div`
  background-color: #475569;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 16px 0px #434451;
`

export const ValidatorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeadingText = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  color: #f8fafc;
  font-weight: bold;
`
export const InputElementContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TaglineText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #f8fafc;
`

export const InputElement = styled.input`
  background-color: #edeeff;
  outline: none;
  border: none;
  height: 30px;
  width: 80%;
`

export const ErrorLine = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #ef4444;
`
