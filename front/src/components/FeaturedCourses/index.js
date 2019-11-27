import React, {useEffect, useState} from 'react';

import api from '../../services/api';

function FeaturedCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const loadCourses = async () => {
          const response = await api.get('courses');
          console.log(response);
          setCourses(response.data);
        };
    
        loadCourses();
    }, []);
    

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
                                <a className="btn_4">Web</a>
                                <h4>R$130,00</h4>
                                <a href="course-details.html"><h3>ReactJS</h3></a>
                                <p>orem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XV.</p>
                                <div className="author_info">
                                    <a className="btn_1" href="#">COMPRAR</a>
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