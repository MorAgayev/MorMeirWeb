/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import { useState } from 'react';
import { useEffect } from 'react';
import { getRecommendations } from '../services/projects-service';
import { MainModal } from '../components/MainModal';


export function Recommendations() {
    const [recommendations, setRecommendations] = useState(null)
    const [selectedRec, setSelectedRec] = useState(null)

    useEffect(()=> {
        setRecommendations(getRecommendations())
    }, [])

    return (
        <div className="recommendations section" id="recommendations">
           <span className="section__subtitle">My coworkers say</span>
           <h2 className="section__title">Recommendations</h2> 
                <Swiper
                    className="recommendations__container container"
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    grabCursor={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        576: {
                          slidesPerView: 2,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 48,
                        }
                    }}
                >
                    {recommendations && recommendations.map((rec, idx) => {
                        return <SwiperSlide key={rec.id}>
                            <div className="recommendation__card" onClick={()=> setSelectedRec(idx)}>
                                <img src={`${rec.img}`} className="recommendation__img" />

                                <h3 className="recommendation__name">{rec.name}</h3>
                                <span className="recommendation__job-title">{rec.title}</span>
                                <p className="recommendation__description">{rec.description}</p>
                            </div>
                        </SwiperSlide>
                    })
                }
                </Swiper>

                {selectedRec != null && <MainModal close={()=> setSelectedRec(null)}>
                    <div className="recommendation__details-card">
                        <div className="recommendation__details-top">
                            <img src={`${recommendations[selectedRec].img}`} className="recommendation__details-img" />

                            <div className="recommendation__details-title">
                                <h3 className="recommendation__name">{recommendations[selectedRec].name}</h3>
                                <span className="recommendation__details-job-title">{recommendations[selectedRec].title}</span>
                            </div>
                        </div>
                        <p className="recommendation__details-description">{recommendations[selectedRec].description}</p>
                    </div>
                </MainModal>}
        </div>
    )
}