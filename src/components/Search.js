import React, { Component } from 'react'

class Search extends Component {
    state={
        searchTerm :'',
    }
    render() {
        const handleSearch= (e) =>{
            console.log(e.target.value)
            
            this.setState ({
                searchTerm:  
                    e.target.value
                  });


            console.log(this.state)


        }
    return (
      <div>
          <input type="text" onChange={handleSearch}/>
      </div>
    )
  }
}
export default Search