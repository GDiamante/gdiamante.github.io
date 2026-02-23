import './navbar.css';
import NavButton from './NavButton';

export default function Navbar() {
    return (
        <>
            <div>
                <NavButton text="Home"></NavButton>
                <NavButton text="Camping"></NavButton>
                <NavButton text="Fitness"></NavButton>
                <NavButton text="Tech"></NavButton>
            </div>
        </>
    )
}