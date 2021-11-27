import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/styles.css";
import imagenes from './assets/imagenes';
import axios from 'axios';


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
      <div className="logo">
        <img src={imagenes.logo}></img>
      </div>
      <Bar  elements = {helpbarElements}/> 
      <div className = "navBarElements">
      <Bar elements = {navbarElements}/>
    </div>
    <div className="underBar">
    </div>
    </div>
    
  }
}


class RelatedProducts extends React.Component{
  render(){
    let listProduct = this.props.products.map((product) => 
    <><div className="related-product-section">
      <img src={product.src} className="product-related-image"/><a href={product.href}>{product.name}</a></div></>);
    return <div class="related-products">
      <h4 className="related-title">Productos más vendidos</h4>
      <div className="boxRelated">{listProduct}</div>
    </div>
  }
}

class Products extends React.Component{
  render(){
    let listProduct = this.props.products.map((product) => 
    <>
    <div class="products">
      <h5><a href={product.href}>{product.name}</a></h5>
      <div className="image_wrap">
        <img src={product.src} className="product-image"/>
      </div>
      <div className="button-section">
        <button href={product.href}>Comprar</button>
        <p class="price">{product.price} {product.currency}</p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
    </>);
    return <div class="main-products">
      {listProduct};
    </div>
  }
}
let relatedProducts = [
  {src:imagenes[5].img, alt:imagenes[5].title, name:"AGV Skyline Blog", href:"#", category: "casco"},
  {src:imagenes[7].img,alt:imagenes[7].title, name:"Schuberth SRT1", href:"#", category: "casco"},
  {src:imagenes[4].img, alt:imagenes[4].title, name:"Arai Quantum DNA", href:"#", category: "chaqueta"},
  {src:imagenes[6].img, alt:imagenes[6].title, name:"sShoei Enigma TC4 XR1100", href:"#", category: "casco"},
]


let mainProducts = [
  {src:imagenes[3].img, alt:imagenes[3].title ,name:"Producto1", href:"#", category: "", price: 123, currency: "€"},
  {src:imagenes[4].img, alt:imagenes[4].title, namey:"Producto2", href:"#", category: "", price: 123, currency: "€"},
  {src:imagenes[5].img, alt:imagenes[5].title, name:"Producto3", href:"#", category: "", price: 123, currency: "€"},
  {src:imagenes[6].img, alt:imagenes[6].title, name:"Producto4", href:"#", category: "", price: 123, currency: "€"},
  {src:imagenes[7].img,alt:imagenes[7].title, name:"Producto5", href:"#", category: "", price: 123, currency: "€"},
  {src:imagenes[3].img,alt:imagenes[3].title,  name:"Producto6", href:"#", category: "", price: 123, currency: "€"},
  {src:imagenes[4].img, alt:imagenes[4].title, name:"Producto7", href:"#", category: "", price: 123, currency: "€"},
  {src:imagenes[5].img, alt:imagenes[5].title,name:"Producto8", href:"#", category: "", price: 123, currency: "€"},
  {src:imagenes[6].img, alt:imagenes[6].title, name:"Producto9", href:"#", category: "", price: 123, currency: "€"},
  {src:imagenes[7].img,alt:imagenes[7].title, name:"Producto10", href:"#", category: "", price: 123, currency: "€"},
  {src:imagenes[4].img, alt:imagenes[4].title, name:"Producto11", href:"#", category: "", price: 123, currency: "€"},
  {src:imagenes[5].img,alt:imagenes[5].title, name:"Producto12", href:"#", category: "", price: 123, currency: "€"},
]


class Categories extends React.Component{
  render(){
    let listCategories = this.props.categories.map((category) => 
    <div>
      <div className="category">
      <a href={category.href}>{category.name}</a>
      </div>
    </div>
      );
    return (<div className="categories">
      <h4>Categorías</h4>
      {listCategories}
    </div>)
  }
}
let listCategories = [
  {href:"", name:"Guantes"},
  {href:"", name:"Guantes"},
  {href:"", name:"Guantes"},
  {href:"", name:"Guantes"},
]

class Related extends React.Component{
  render(){
    return <div className="section-related">
      <RelatedProducts products = {relatedProducts}/>
      <div className="related-brands">
        <h4>Marcás más vendidas</h4>
        <div className="image_wrap">
            <img src={imagenes[1].img} className="brand-image"/> 
        </div>
        <p><a href="www.google.com">Ver todas las marcas</a></p>
      </div>
    </div>
  }
}

class MainSection extends React.Component{
  render(){
    return <div className="main-section">
       <Categories categories={listCategories} />
       <div className="articles">
       <h4>Productos más vendidos</h4>
       <div className="filterProducts">
      <select>
          <option value="cascos">Cascos</option>
          <option value="chaquetas">Chaquetas</option>
          <option selected value="guantes">Guantes</option>
        </select>
    </div>
       <Products products = {mainProducts}/>
       <div class="pagination-bar">
          <a class="page-number" href="#">1</a>
          <a class="page-number" href="#">2</a>
          <a class="page-number" href="#">3</a>
          <a class="page-number" href="#">4</a>
          <a class="page-number" href="#">5</a>
          <a class="page-number" href="#">...</a>
          <a class="page-number" href="#">Siguiente</a>
      </div>
    </div>
    </div>
  }
}

class Footer extends React.Component{
  async componentDidMount() {
    const resp = await axios.get('https://fakestoreapi.com/products');
    const resp2 = await axios.get('https://rickandmortyapi.com/api/character');
    console.log(resp.data);
    console.log(resp2.data);
    }
 /*  async saveProduct() {
    let url = 'https://fakestoreapi.com/products';
    let data = JSON.stringify({
      title: 'Auriculares',
      price: 27.5,
      description: 'unos auriculares chulos',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    });
      const resp = await axios.post(url, data);
      console.log(resp.status);
  } */
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

/* class ProductCounter extends React.Component{
  constructor(props){
    super(props)
    this.state = {{productStock: "prueba1"};}
    this.clickButton = this.clickButton.bind(this);
  }
  componentDidMount(){
    this.counter = this.clickButton()
  }
  clickButton(){
    this.setState((state,props)=> ({
      productStock: state.productStock + "prueba2"
    }))
    console.log("gola")
  }
  render(){
    return <div>
      <h3>Quedan estos {this.productStock} </h3>
      <button onClick={this.clickButton}>BOTON</button>
    </div>
  }  
} */

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


