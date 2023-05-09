import './Loading.css';
import { Hearts } from 'react-loader-spinner'

function Loading() {
    return (
        <div className="loading-bg">
            <img src="imagens/loadingimg3.svg" alt="image" className='loading-img'></img>
        </div>
    );
}

export default Loading;