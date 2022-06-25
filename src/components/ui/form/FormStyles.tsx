import styled from '@emotion/styled';

const FormContainer = styled.form(
  ({
    theme: {
      colors: { bgSecondary, boxShadow },
      devices: { tablet },
    },
  }) => `
    background-color: ${bgSecondary};
    border-radius: 0.5rem;
    box-shadow: ${boxShadow};
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
  
    @media ${tablet} {
      width: 22rem;
    };
  
    button[type="submit"] {
      margin: 2rem 0;
    }
  `
);

const Label = styled.label`
  margin: 0.5rem 0;

  &:first-of-type {
    margin-top: 1rem;
  }
`;

const Input = styled.input(
  ({
    theme: {
      colors: { bgSecondary, textPrimaryColor },
    },
  }) => `
    background-color: ${bgSecondary};
    border: 1px solid ${textPrimaryColor};
    border-radius: 0.2rem;
    color: inherit;
    line-height: 1.5;
    margin: 0.5rem 0;
    padding: 0.4rem;
  `
);

const ErrorMessage = styled.span(
  ({
    theme: {
      colors: { error },
      font: { s },
    },
  }) => `
    color: ${error};
    font-size: ${s}
    `
);

export { FormContainer, Input, Label, ErrorMessage };
