import styled                from 'styled-components'
import Image                 from 'next/image'
import ui                    from 'dictionaries/ui'
import {commaSeparateNumber} from 'helper/helper'

const schemaCard = [
  {
    key: 'population',
    title: ui.home.list.population,
    type: 'number',
    key_server: 'population'
  }, {
    key: 'capital',
    title: ui.home.list.capital,
    type: 'string',
    key_server: 'capital'
  }, {
    key: 'region',
    title: ui.home.list.region,
    type: 'string',
    key_server: 'region'
  }
]

const CardCountry = ({data}) => <StyledCardCountry className='border-radius-4 d-flex flex-column'>
  <Image
    className='card-country--image'
    alt={name}
    width={404}
    height={303}
    layout="responsive"
    loading="lazy"
    src={data.flag}/>
  <div className='px-2 pt-3 pb-4'>
    <h5 className='font-weight-800 text-21 text-left '>{data.name}</h5>
    <ul className='mt-1'>
      {
        schemaCard.map(schemaCardItem => <li className='mb-q' key={schemaCardItem.key}><h6
            className='font-weight-600 text-14 text-capitalize text-left'>{schemaCardItem.title} : <span
            className='font-weight-300'> {
            schemaCardItem.type === 'number'
            ? commaSeparateNumber(data[schemaCardItem.key_server])
            : data[schemaCardItem.key_server]
          }</span></h6></li>
        )
      }
    </ul>
  </div>
</StyledCardCountry>

export default CardCountry

const StyledCardCountry = styled.article`
  text-align: center;
  overflow: hidden;

  .card-country--image {
    width:100%;
    height:100%;
    object-fit: contain;
    aspect-ratio: 4/3;
    border-radius: 4px 4px 0 0;
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--blue-dark);
    color: var(--white);
  }

  @media (prefers-color-scheme: light) {
    background-color: var(--white);
    box-shadow: var(--shadow);
    color: var(--dark-900);
  }
`