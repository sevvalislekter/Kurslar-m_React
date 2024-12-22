import React from 'react'

function Course({ course }) {
    const { id, title, desc, price, link, image } = course;

    return (
        <div className='course'>
            <div>
                <div className='course-div'>
                    <img src={image} width={220} height={110} />
                    <h4 className='course-title'>{title}</h4>
                    <p className='course-desc'>{desc}</p>
                    <h3 className='course-price'>{price} TL</h3>
                    <div className='course-link'><a href={link} style={{ textDecoration: 'none' }}>satın almak için</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Course