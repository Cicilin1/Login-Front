import {Container, LeftContainer, RightContainer, Form, Link} from './style'

export function Login() {

    return (
        <Container>

            <LeftContainer>
                <h1>Login</h1>
            </LeftContainer>
            <RightContainer>

                <Form>
                    <input type="text" placeholder='email' />
                    <input type="password" placeholder='senha' />

                    <Link>Esqueci minha senha!</Link>

                    <input type="submit" />
                </Form>

            </RightContainer>
        </Container>
    )
}