import {FC} from 'react'
import s from './Loading.module.scss'
import ReactDOM from 'react-dom'

const loading = (position: boolean) => {
    if(position){
        ReactDOM.render(<Animation/>, document.getElementById('loading'));
    }else{
        ReactDOM.render(<></>, document.getElementById('loading'));
    }
}

const Animation: FC = () => {
    return(
        <div className={s.loading}>
            <div className="img">
                <img src="/img/loading.gif" alt="Loading" />
            </div>
        </div>
    )
}


export default loading