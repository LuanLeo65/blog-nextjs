"use client";

import styled, { css } from "styled-components";

export const Container = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    margin-bottom: ${theme.spacings.medium};
    display: block;
    margin: 0 auto;
  `}
`;
