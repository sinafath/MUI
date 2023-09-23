import HotAndNewCard from "../HotAndNewCard";
import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { customHomepageWidget } from "../../pages/dev-a";
export default function HotAndNewSection({ data, className }: { data: customHomepageWidget['categories'][0], className?: string }) {
    return (
        <div
            className={`h-[450px] w-auto max-w-[1260px] m-auto ${className}`}
        >
            <Swiper
                modules={[Navigation]}
                navigation={true}
                breakpoints={{
                    1: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                    1900: {
                        slidesPerView: 4,
                    },
                }}
                slidesPerView={4}
                spaceBetween={40}
                defaultValue={4}
                className='h-full'
            >
                {data.products.map(
                    (item, index) =>
                        <SwiperSlide key={index}>
                            <HotAndNewCard
                                image={item.thumbnail!}
                                description="هیچ چیز مانند یک چرخش روان، شیک نیست"
                                title={item.name!}
                                url={item.url!}
                            />
                        </SwiperSlide>
                )}
            </Swiper>
        </div>

    )
}