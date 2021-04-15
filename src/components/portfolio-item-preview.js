
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './portfolio-item-preview.module.css'

export default ({ portfolioItem }) => (
  <div className={styles.preview}>
    <Img className='previewImage' alt="" fluid={{...portfolioItem.heroImage.fluid, aspectRatio: 3/3}} />
    <h3 className={styles.previewTitle}>
      <Link to={`/portfolio/${portfolioItem.slug}`}>{portfolioItem.title}</Link>
    </h3>
    <small>{portfolioItem.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: portfolioItem.description.childMarkdownRemark.html,
      }}
    />
  </div>
)