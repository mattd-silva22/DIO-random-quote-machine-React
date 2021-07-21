

import './styles.scss'


type HeaderNavbarProps = {
    titleText: string;
}
export function HeaderNavbar(props:HeaderNavbarProps) {


    return (

        <header className={'header-navbar'}>
            <div className="container">
                <div>
                    <h1>{props.titleText}</h1>
                </div>

              
            </div>
        </header>



    )
}