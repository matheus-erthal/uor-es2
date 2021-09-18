import './style.scss';

export default function Loader(props: any){
  const loader = (
    <div className='loaderBackground'>
      <div className='loader'>
        <div></div>
      </div>
    </div>
  );

  return props.visivel && loader;
}
