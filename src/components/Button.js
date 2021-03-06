import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: uppercase;
    font-size: 1rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color: ${(props) =>
        props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
    color: var(--lightBlue);
    color: ${(props) => (props.cart ? 'var(--mainYellow)' : {})};
    color: ${(props) => (props.userlogin ? 'var(--mainWhite)' : {})};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.2rem 0.2rem;
    transition: all 0.5s ease-in-out;

    &:hover {
        background: ${(props) =>
            props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
        color: white;
    }

    &:focus {
        outline: none;
    }
`;
