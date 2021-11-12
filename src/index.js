import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/styles.css";



class MotoLogo extends React.Component{
  render(){
    return <h1><a href={this.props.MotoLogohref}> Motoshop</a></h1>;
  }
}

class Bar extends React.Component{
  render(){    
    let barElement = this.props.elements.map((element) => <a href={element.href}>{element.name}</a>);
    return <div className="navbar">
     {barElement} 
  </div>
  }
}
let navbarElements = [
  {href:"", name:"Inicio"},
  {href:"", name:"Carretera"},
  {href:"", name:"Ciudad"},
  {href:"", name:"Off Road"},
  {href:"", name:"Trail"},
  {href:"", name:"Trial"},
  {href:"", name:"Casual"},
  {href:"", name:"Accesorios"},
];

let helpbarElements = [
  {href:"", name:"Ayuda"},
  {href:"", name:"Nuestras tiendas"},
  {href:"", name:"Contáctanos"}
]



class Header extends React.Component{
  render(){
    return <div className = "header">
      <MotoLogo className="logo" MotoLogohref = 'www.google.es'/>
      <Bar elements = {helpbarElements}/>  
      <Bar className="navBar" elements = {navbarElements}/>
    </div>
  }
}

/*-----------Sección de Related Brands ----------------*/

class RelatedBrands extends React.Component{
  render(){
    return (<div className="related-brands">
    <h4>Marcás más vendidas</h4>
    <img src="#" className="brand-image"/>
    <p><a href="www.google.com">Ver todas las marcas</a></p>
  </div>)
  }
}


/*-----------Sección de Related Products ----------------*/

class RelatedProducts extends React.Component{
  render(){
    let listProduct = this.props.products.map((product) => <><img src={product.src} /><a href={product.href}>{product.name}</a></>);
    return <div class="related-products">
      {listProduct};
    </div>
  }
}




class Products extends React.Component{
  render(){
    let listProduct = this.props.products.map((product) => <><img src={product.src} /><a href={product.href}>{product.name}</a></>);
    return <div class="main-products">
      {listProduct};
    </div>
  }
}
let relatedProducts = [
  {src:"#", name:"Producto1", href:"#"},
  {src:"#", name:"Producto2", href:"#"},
  {src:"#", name:"Producto3", href:"#"},
  {src:"#", name:"Producto4", href:"#"},
  {src:"#", name:"Producto5", href:"#"},
  {src:"#", name:"Producto6", href:"#"},
]


let mainProducts = [
  {src:"#", name:"Producto1", href:"#"},
  {src:"#", name:"Producto2", href:"#"},
  {src:"#", name:"Producto3", href:"#"},
  {src:"#", name:"Producto4", href:"#"},
  {src:"#", name:"Producto5", href:"#"},
  {src:"#", name:"Producto6", href:"#"},
  {src:"#", name:"Producto1", href:"#"},
  {src:"#", name:"Producto2", href:"#"},
  {src:"#", name:"Producto3", href:"#"},
  {src:"#", name:"Producto4", href:"#"},
  {src:"#", name:"Producto5", href:"#"},
  {src:"#", name:"Producto6", href:"#"},
  {src:"#", name:"Producto1", href:"#"},
  {src:"#", name:"Producto2", href:"#"},
  {src:"#", name:"Producto3", href:"#"},
  {src:"#", name:"Producto4", href:"#"},
  {src:"#", name:"Producto5", href:"#"},
  {src:"#", name:"Producto6", href:"#"},
]


class Categories extends React.Component{
  render(){
    return(<div className="categories">
      <h4>Categorías</h4>
      <a class="category">Cascos</a>
      <a class="category">Chaquetas</a>
      <a class="category">Guantes</a>
      <a class="category">Impermeables</a>
      <a class="category">Intercomunicadores</a>
      <a class="category">Monos</a>
      <a class="category">Pantalones</a>
      <a class="category">Protecciones</a>
      <a class="category">Ropa térmica</a>
      <a class="category">Maletas blandas</a>
      <a class="category">Maletas rígidas</a>
      <a class="category">Antirrobos</a>
      <a class="category">Escriberas</a>
      <a class="category">Manillares</a>
      <a class="category">Portamatriculass</a>
      <a class="category">Sistemas de escape</a>
      <a class="category">Neumáticos</a>
      <a class="category">Baterías</a>
    </div>)
  }
}

class Related extends React.Component{
  render(){
    return <div className="section-related">
      <RelatedProducts products = {relatedProducts}/>
      <RelatedBrands  />
    </div>
  }
}

class MainSection extends React.Component{
  render(){
    return <div className="main-section">
       <Categories />
       <Articles/>
    </div>
  }
}
class Articles extends React.Component{
  render(){
    return <div className="articles">
       <h4>Productos más vendidos</h4>
       <Products products = {mainProducts}/>
    </div>
  }
}
class Footer extends React.Component{
  render(){
    let footerItems = this.props.items.map((item)=> <><a href={item.href}>{item.name}</a></>);
    return <div className="footer">
        {footerItems}
    </div>
  }
}

let footerElements = [
  {href:"", name:"Aviso Legal"},
  {href:"", name:"Política de privacidad"},
  {href:"", name:"Gastos de envío"},
  {href:"", name:"Sistemas de pago"},
  {href:"", name:"Plazos de entrega"},
  {href:"", name:"Devoluciones"}
]

function App (){
    return (
      <div>
        <Header />
        <Related />
        <MainSection />
        <Footer items = {footerElements} />
      </div>
    )
  }


ReactDOM.render(<App/>, document.getElementById('root'));


