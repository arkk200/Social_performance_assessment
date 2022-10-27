import './Moom.scss';

function Moom() {
    return (
        <div className="moom">
            <ul>
                <li className="trav-pages">
                    <h2>한국 -&gt; 몸바사 뫄 국제공항</h2>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/moa.png'} />
                        <img src={process.env.PUBLIC_URL + '/images/map1.png'} />
                    </div>
                </li>
                <li className="trav-pages">
                    <h2>몸바사 정보</h2>
                    <img src={process.env.PUBLIC_URL + '/images/moom-info.png'} />
                </li>
                <li className="trav-pages">
                    <h2>몸바사 Jambo Village 호텔에서 휴식</h2>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/jambo-hotel.jpeg'} />
                        <img src={process.env.PUBLIC_URL + '/images/jambo-hotel-path.png'} />
                    </div>
                </li>
                <li className="trav-pages">
                    <h2>몸바사 여행지1 - 다이니 비치</h2>
                </li>
                <li className="trav-pages">
                    <h2>몸바사 여행지2 - 우후루 가든</h2>
                </li>
            </ul>
        </div>
    )
}

export default Moom;