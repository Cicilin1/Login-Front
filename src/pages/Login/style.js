import styled from 'styled-components'

export const Container = styled.div`
    background: ${({theme}) => theme.colors.grey };
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Form = styled.form`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width: 350px;
    height: 500px;
    border-radius:5px;

    h2{
        margin-top: 3rem;
    }

    input{
        width: 200px;
        padding: 1rem;
        margin: 1rem;
    }

    .Button{
        padding: 0.5rem;
        width: 200px;
        height: 30px;
    }
`

export const Link = styled.a`
    color: grey;
    transition: 0.3s;
    font-size: 14px;
    

    &:hover {
        color: black;
        cursor: pointer;
    }
`
