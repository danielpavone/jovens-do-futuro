import React, { useEffect, useState } from 'react';

import api from '../../services/api';

function FeaturedCourses() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const loadCourses = async () => {
          const response = await api.get('courses');
          const featured = response.data.slice(0,3);
          setCourses(featured);
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
                    {courses.map(course => (
                        <div className="col-sm-6 col-lg-4">
                            <div className="single_special_cource">
                                <div className="special_cource_text">
                                    <a className="btn_4">{course.type}</a>
                                        <h4>R$ {course.price}</h4>
                                    <a href="course-details.html"><h3>{course.name}</h3></a>
                                        <p>{course.description}</p>
                                    <div className="author_info">
                                        <a className="btn_1" href="#">COMPRAR</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedCourses;