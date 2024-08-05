import '../Css-Sheets/companies.css';
import logo from '../logo.svg';
import bitsclan from '../Assets/Images/bitsclan.png'
import syscon from '../Assets/Images/syscon.png'

const companies = [
    {
        name: 'Bitsclan IT Solutions',
        imageUrl: bitsclan,
    },
    {
        name: 'Syscon',
        imageUrl: syscon,
    },
];

function Company() {
    return (
        <div className="companies">
            <h1 className='h-company'>Work Experience</h1>
            <div className="company-list">
                {companies.map((company, index) => (
                    <div key={index} className="company">
                        <img className='c-img'
                            src={company.imageUrl}
                            alt={company.name}
                        />
                        <p>{company.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Company;
