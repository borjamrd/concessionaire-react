import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/styles.css";

class MotoLogo extends React.Component{
  render(){
    return <h1 className="pageTitle"><a href={this.props.MotoLogohref}> Motoshop</a></h1>;
  }
}

class Bar extends React.Component{
  render(){    
    let barElement = this.props.elements.map((element) => <a href={element.href} className={element.className}>{element.name}</a>);
    return <div className="helpBar">
     {barElement} 
  </div>
  }
}
let navbarElements = [
  {href:"", name:"Inicio", className: "li"},
  {href:"", name:"Carretera", className: "li"},
  {href:"", name:"Ciudad", className: "li"},
  {href:"", name:"Off Road", className: "li"},
  {href:"", name:"Trail", className: "li"},
  {href:"", name:"Trial", className: "li"},
  {href:"", name:"Casual",className: "li"},
  {href:"", name:"Accesorios", className: "li"},
];

let helpbarElements = [
  {href:"", name:"Ayuda", className: "li"},
  {href:"", name:"Nuestras tiendas", className: "li"},
  {href:"", name:"Contáctanos",  className: "li"}
]

class Header extends React.Component{
  render(){
    return <div className = "header">
      <MotoLogo className="logo" MotoLogohref = 'www.google.es'/>
      <Bar  elements = {helpbarElements}/>  
    </div>
  }
}
class NavBarElements extends React.Component{
  render(){
    return <div className = "navBarElements">
      <Bar elements = {navbarElements}/>
    </div>
  }
}

class UnderBar extends React.Component{
  render(){
    return <div className="underBar">
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
    let listProduct = this.props.products.map((product) => <><div class="products"><img src={product.src} /><a href={product.href}>{product.name}</a></div></>);
    return <div class="related-products">
      <h4 className="related-title">Productos más vendidos</h4>
      <div className="boxRelated">{listProduct}</div>
      
    </div>
  }
}

class Products extends React.Component{
  render(){
    let listProduct = this.props.products.map((product) => <><div class="products"><a href={product.href}><h5>{product.name}</h5></a><img src={product.src}/><div className="button-section"><button href={product.href}>Comprar</button><p class="price">{product.price} {product.currency}</p></div></div></>);
    return <div class="main-products">
      {listProduct};
    </div>
  }
}
let relatedProducts = [
  {src:"#", name:"AGV Skyline Blog", href:"#", category: "casco"},
  {src:"#", name:"Schuberth SRT1", href:"#", category: "casco"},
  {src:"#", name:"Arai Quantum DNA", href:"#", category: "chaqueta"},
  {src:"#", name:"sShoei Enigma TC4 XR1100", href:"#", category: "casco"},
]


let mainProducts = [
  {src:"#", name:"Producto1", href:"#", category: "", price: 123, currency: "€"},
  {src:"#", name:"Producto2", href:"#", category: "", price: 123, currency: "€"},
  {src:"#", name:"Producto3", href:"#", category: "", price: 123, currency: "€"},
  {src:"#", name:"Producto4", href:"#", category: "", price: 123, currency: "€"},
  {src:"#", name:"Producto5", href:"#", category: "", price: 123, currency: "€"},
  {src:"#", name:"Producto6", href:"#", category: "", price: 123, currency: "€"},
  {src:"#", name:"Producto7", href:"#", category: "", price: 123, currency: "€"},
  {src:"#", name:"Producto8", href:"#", category: "", price: 123, currency: "€"},
  {src:"#", name:"Producto9", href:"#", category: "", price: 123, currency: "€"},
  {src:"#", name:"Producto10", href:"#", category: "", price: 123, currency: "€"},
  {src:"#", name:"Producto11", href:"#", category: "", price: 123, currency: "€"},
  {src:"#", name:"Producto12", href:"#", category: "", price: 123, currency: "€"},
]


class Categories extends React.Component{
  render(){
    return(<div className="categories">
      <h4>Categorías</h4>
      <a href="#" class="category">Cascos</a>
      <a href="#" class="category">Chaquetas</a>
      <a href="#" class="category">Guantes</a>
      <a href="#" class="category">Impermeables</a>
      <a href="#" class="category">Intercomunicadores</a>
      <a href="#" class="category">Monos</a>
      <a href="#"  class="category">Pantalones</a>
      <a href="#" class="category">Protecciones</a>
      <a href="#" class="category">Ropa térmica</a>
      <a href="#" class="category">Maletas blandas</a>
      <a href="#" class="category">Maletas rígidas</a>
      <a href="#" class="category">Antirrobos</a>
      <a href="#" class="category">Escriberas</a>
      <a href="#" class="category">Manillares</a>
      <a href="#" class="category">Portamatriculass</a>
      <a href="#" class="category">Sistemas de escape</a>
      <a href="#" class="category">Neumáticos</a>
      <a href="#" class="category">Baterías</a>
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

class FilterProducts extends React.Component{
  render(){
    return <div className="filterProducts">
      <select>
          <option value="cascos">Cascos</option>
          <option value="chaquetas">Chaquetas</option>
          <option selected value="guantes">Guantes</option>
        </select>
    </div>
  }
}



class Articles extends React.Component{
  render(){
    return <div className="articles">
       <h4>Productos más vendidos</h4>
       <FilterProducts/>
       <Products products = {mainProducts}/>
       <Pagination/>
    </div>
  }
}

class Pagination extends React.Component{
  render(){
    return <div class="pagination-bar">
    <a class="page-number" href="#">1</a>
    <a class="page-number" href="#">2</a>
    <a class="page-number" href="#">3</a>
    <a class="page-number" href="#">4</a>
    <a class="page-number" href="#">5</a>
    <a class="page-number" href="#">...</a>
    <a class="page-number" href="#">Siguiente</a>
</div>
  }
}



class Footer extends React.Component{
  render(){
    let footerItems = this.props.items.map((item)=> <><a href={item.href} className="footer-item">{item.name}</a></>);
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
        <NavBarElements />
        <UnderBar/>
        <Related />
        <MainSection />
        <Footer items = {footerElements} />
      </div>
    )
  }
ReactDOM.render(<App/>, document.getElementById('root'));


