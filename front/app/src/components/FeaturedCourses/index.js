import React from 'react';

function FeaturedCourses() {

    return (
        <section className="special_cource">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5">
                        <div className="section_tittle text-center">
                            <p>cursos</p>
                            <h2>Cursos em Destaque</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="single_special_cource">
                            <div className="special_cource_text">
                                <a href="course-details.html" className="btn_4">Web Development</a>
                                <h4>$130.00</h4>
                                <a href="course-details.html"><h3>Web Development</h3></a>
                                <p>Which whose darkness saying were life unto fish wherein all fish of together called</p>
                                <div className="author_info">
                                    <a class="btn_1" href="#">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedCourses;