import React, { Component } from 'react';
import Nav from './Nav'

export default class Menu extends Component {
    state={
        isOpen: false
    }

    render() {
       const menu = () => {
            // this.setState({isOpen:true})

            //utilise setstate pour changer d'etat
            this.setState ({
                //on definit l'etat que l'on veut changer c'est a dire isOpen
                isOpen:  
                    // on doit donner la nouvelle valeur à cet etat isOpen
                    // on peut mettre juste true pour changer la valeur
                    // mais si on e deja cliqué une fois alors on aimerait que la valeur du state soit false à nouveu
                    // donc on utilise une condition ternaire qui va changer la valeur en fonction de la valeur précédente
                    !this.state.isOpen
                  
                  });


            console.log(this.state)
        }
    return (
      <div className="menu-container" onClick={menu}>
        {// le commentaire dans return c'est dans des alcolades et aussi le javascript
        }
        {/* {this.state.isOpen && <Nav />} */}
        {/* {this.state.isOpen === true && <Nav />} */}
        {this.state.isOpen === true ? <Nav /> : "hello"}
      </div>
    )
  }
}
