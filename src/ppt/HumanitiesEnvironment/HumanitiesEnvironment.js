import './HumanitiesEnvironment.scss';

function HumanitiesEnvironment() {
    return (
        <div className="hum-env">
            <img src={process.env.PUBLIC_URL + '/images/san-up.jpg'} />
            <ul className="hum-env__list">
                <li>
                    (1차산업) 농림수산업
                </li>
                <li>
                    (2차산업) 제조ㆍ건설ㆍ광업
                </li>
                <li>
                    (3차산업) 상업
                </li>
                <li>
                    그 외 자원개발, 보건의료, 석유산업
                </li>
            </ul>
        </div>
    )
}

export default HumanitiesEnvironment;