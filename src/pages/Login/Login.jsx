import { Container, Form, Link } from './style'

export function Login() {

    return (
        <Container>
            <Form>
                <h2>Login</h2>
                <input type="text" placeholder='email' />
                <input type="password" placeholder='senha' />
                <input type="submit" className='Button' />

                <Link>Esqueci minha senha !</Link>
            </Form>



        </Container>
    )
}