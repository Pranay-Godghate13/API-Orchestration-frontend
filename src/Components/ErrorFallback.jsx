function ErrorFallback({loading,error}) {
    if(loading)
    {
        return <p className='loading-class'>Loading...</p>
    }
    if(error)
    {
        return (
        <div>
            <p className='error-class'>{error}</p>
            <button className='error-button'>Go back</button>
        </div>
        ) 
    }
  
}
export default ErrorFallback