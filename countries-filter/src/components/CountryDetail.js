import { useParams, Link, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';


function CountryDetail() {
    const { name } = useParams();
    const { state } = useLocation();
    console.log(state)

  // Fetch the country data using the name parameter

  return (
    <div className='container --flex-center --dir-column  --my2 '>
    <div>
        <img src={state.flag} alt={name} className="country-flag --flex-start" />

    </div>
       <div className='country-info --p'>
       <p>{state.story}</p>
       <h2>{name}</h2>
      <p><strong>Language:</strong> {state.language}</p>
      <p><strong>Capital:</strong> {state.capital}</p>
      {state.neighbors && <p><strong>Neighbours:</strong> {state.neighbors.join(", ")}</p>}
      </div>
      <div>

    <Link className='btn --btn-primary --px2 --p2' to="/"><BiArrowBack />Back to Countries</Link>
      </div>
    </div>
  );
}

export default CountryDetail;