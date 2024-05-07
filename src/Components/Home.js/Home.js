import React from "react";
import Header from './Header';
import './Home.css';
import prideimg from './../../assets/images/3.png';
import ingredients from './../../assets/images/5.png';
import Data from '../../Data';

 
const Home = () => {
    const blogitem = Data.map((item) => {
        return (
            <div className="col-md-4">
                <div className='box'>
                <img src={item.img} />
                <h5>{item.title}</h5>
                <span>{item.span}</span>
                <h6>{item.price}</h6>
                </div>
                <button><a href='#'> order now </a></button>
            </div>
        )
    })

    return (
            <>
            <Header/>
            <section className='numbers'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h2>1287+</h2>
                            <h6>SAVING</h6>
                        </div>

                        <div className='col-md-3'>
                            <h2>5786+</h2>
                            <h6>SAVING</h6>
                        </div>

                        <div className='col-md-3'>
                            <h2>1440+</h2>
                            <h6>SAVING</h6>
                        </div>

                        <div className='col-md-3'>
                            <h2>7110+</h2>
                            <h6>SAVING</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pride'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={prideimg} title='prideimg' />
                        </div>

                        <div className="col-md-6">
                        <h2>We Pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam et purus a odio finibus bibendum amet.</p>
                        <button><a href="#">learn more</a></button>
                        </div>
                    </div>
                </div>
            </section>

        <section className="ingredients">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>We make everything by hand with the best possible ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam et purus a odio finibus bibendum amet.</p>
                        <ul>
                        <li>Etiam sed dolor ac diam volutpat.</li>
                        <li>Erat volutpat aliquet imperdiet.</li>
                        <li>purus a odio finibus bibendum.</li>
                        </ul>
                        <button>
                            <a href="#">learn more</a>
                        </button>
                    </div>
                <div className="col-md-6">
                    <img src={ingredients} alt='ingredients' />
                </div>
                </div>
            </div>
        </section>

        <section className="paralex">
        <div className="container">
        <div className="row">
        <div className="col-lg-12 col-md-12">
            <h2>When a man's stomach is full it makes no<br/> difference whether he is rich or poor.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odionibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            <a href="#">Watch Our Story</a>
        </div>
        </div>
        </div>
        </section>

        <section className="blogs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Explore Our Foods</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
                </div>
                <div className="row">
                    {blogitem}
                </div>
            </div>
        </section>

        </>

        )
        }
        
    
    export default Home;