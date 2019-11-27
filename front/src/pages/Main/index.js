import React from 'react';
import { Link } from 'react-router-dom';

import FeaturedCourses from '../../components/FeaturedCourses';
import InfoData from '../../components/InfoData';
import AboutUs from '../../components/AboutUs';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function MainPage(props) {

    return (
        <>
            <Header />

            <section className="banner_part">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xl-6">
                            <div className="banner_text">
                                <div className="banner_text_iner">
                                    <h1>Seu conhecimento ajudando o próximo</h1>
                                    <p>Traga sua empresa para o próximo nível e ganhe descontos compartilhando seu conhecimento.</p>
                                    <Link to="/courses" className="btn_1">CONHEÇA NOSSOS CURSOS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AboutUs />
            <FeaturedCourses history={props.history} />
            <InfoData />
            <Footer />
        </>
    );
}

export default MainPage;