import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-content: center;
    height: 100%;
`

export const LeftContainer = styled.div`
    width: 60%;
    background: #1E201E;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const RightContainer = styled.div`
    background: #fff;
    width: 40%;
    height: 520px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    background: green;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

export const Link = styled.a`
    color:grey;
    transition: 0.3s;
    

    &:hover {
        color: black;
        cursor: pointer;
    }
`
