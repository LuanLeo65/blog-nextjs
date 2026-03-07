'use client'
import styled, { css } from "styled-components"

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`

export const PostCardCover = styled.div`
  margin: ${({theme})=> theme.spacings.small};
  aspect-ratio: 16 / 9;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const PostCardHeading = styled.h2`
  ${({theme}) => css`
  font-size: ${theme.font.sizes.medium};

  a{
    color: ${theme.colors.darkGray};
  }
  `}
`
