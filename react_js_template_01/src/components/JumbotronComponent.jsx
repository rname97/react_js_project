import './JumbotronComponent.css'

const JumbotronComponent = () => {
  return (
    <div>
        <div className="jumbotron">
            <div className="container pt-5">
                <div className="pt-5">
                    <h4 className='text-center text-light pt-5 mb-5'>The largest community of photo enthusiasts</h4>
                    <div className='d-flex justify-content-center mt-5'>
                        <button type="button" className="btn btn-primary">Join Today</button>
                    </div>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default JumbotronComponent
