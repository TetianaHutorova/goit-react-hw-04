import ClipLoader from "react-spinners/ClipLoader";
import css from './Loader.module.css'

export default function Loader() {
  return (
    <div className={`sweet-loading ${css.loader}`}>
       <ClipLoader
        color="#000000"
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
