import stylesheet from '@/styles/Header.module.css';
import Link from 'next/link';

function Button(props) {
    return (
         <Link key={props['btn'].id} className={stylesheet.Button} href={props['btn'].href}>{props['btn'].label}</Link>
    )
}

export default function Header() {
    let buttons = [
        {id: 1, label: 'Home', href: '/'},
        {id: 2, label: 'About', href: '/about'},
        {id: 3, label: 'Contact', href: '/contact'},
        {id: 4, label: 'Sign Up', href: '/sign-up'},
        {id: 5, label: 'Sign In', href: '/sign-in'}
    ]
    
    return (
        <div className={stylesheet.Header}>
            {buttons.map((btn) => (
                <Button btn={btn} />
            ))}
        </div>
    )
}