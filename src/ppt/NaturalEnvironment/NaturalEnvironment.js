import './NaturalEnvironment.scss';

function NaturalEnvironment() {
    return (
        <div className="nat-env">
            <ul className="nat-env-list">
                <li>
                    <h1>나쿠루</h1>
                    <img src={process.env.PUBLIC_URL + '/images/nakuru.jpeg'} />
                </li>
                <li>
                    <h1>나이로비</h1>
                    <img src={process.env.PUBLIC_URL + '/images/nairobi.jpg'} />
                </li>
                <li>
                    <h1>몸바사</h1>
                    <img src={process.env.PUBLIC_URL + '/images/moombasa.jpg'} />
                </li>
                <li>
                    <h1>말린디</h1>
                    <img src={process.env.PUBLIC_URL + '/images/malinD.jpg'} />
                </li>
            </ul>
        </div>
    )
}

export default NaturalEnvironment;