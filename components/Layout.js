import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import MainNav from './MainNav';

export default function Layout(props) {
    return (
        <>
            <MainNav />
            <br />
            <Container>
                {props.children}
            </Container>
            <br />
        </>
    )
}