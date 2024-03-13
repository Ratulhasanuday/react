import './Countrie.css'
const Countrie = ({country}) => {

    const{name,flags}=country;
    return (
        <div className='courntry'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Countrie;