import React from 'react';

import FeaturedCourses from '../../components/FeaturedCourses';
import InfoData from '../../components/InfoData';
import AboutUs from '../../components/AboutUs';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function MainPage() {
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
                                    <a href="#" className="btn_1">CONHEÇA NOSSOS CURSOS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AboutUs />
            <FeaturedCourses />
            <InfoData />
            <Footer />
        </>
    );
}

export default MainPage;