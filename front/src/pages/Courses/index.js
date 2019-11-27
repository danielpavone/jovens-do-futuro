import React, {useEffect, useState} from 'react';

import InfoData from '../../components/InfoData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

function CoursesPage() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const loadCourses = async () => {
          const response = await api.get('courses');
          setCourses(response.data);
        };
    
        loadCourses();
    }, []);
    return (
        <>
            <Header />
            
            <section className="special_cource course_padding_top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5">
                            <div className="section_tittle text-center">
                                <p>Cursos oferecidos</p>
                                <h2>Avance de nível com nossos cursos</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {courses.map(course => (
                        <div key={course._id} className="col-sm-6 col-lg-4">
                            <div className="single_special_cource">
                                <div className="special_cource_text">
                                    <a className="btn_4">{course.type}</a>
                                    <h4>R${course.price}</h4>
                                    <a href="course-details.html"><h3>{course.name}</h3></a>
                                    <p>{course.description}</p>
                                    <p><b>{course.company.name}</b></p>
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

            <InfoData />
            <Footer />
        </>
    );
}

export default CoursesPage;