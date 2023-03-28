import downloadInfo from '../data/downloadInfo.json'


const initialCardState={
    downloadInfo:downloadInfo
}
const downloadInfoReducer=(state=initialCardState,action)=>{
    return state;
}

export default downloadInfoReducer