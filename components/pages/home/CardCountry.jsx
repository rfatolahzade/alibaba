import styled from 'styled-components'
import Image from 'next/image'
import ui from 'dictionaries/ui'
import { commaSeparateNumber } from 'helper/helper'
import Link from 'next/link'

const schemaCard = [
  {
    key: 'population',
    title: ui.home.list.population,
    type: 'number',
    key_server: 'population',
  },
  {
    key: 'capital',
    title: ui.home.list.capital,
    type: 'string',
    key_server: 'capital',
  },
  {
    key: 'region',
    title: ui.home.list.region,
    type: 'string',
    key_server: 'region',
  },
]

const CardCountry = ({ data }) => (
  <StyledCardCountry className='border-radius-4 box-shadow d-flex flex-column'>
    <Link href={`/country/${data.alpha3Code.toLowerCase()}`}>
      <a href={`/country/${data.alpha3Code.toLowerCase()}`}>
        <Image
          className='card-country--image'
          alt={data.name}
          width={404}
          height={303}
          layout='responsive'
          loading='lazy'
          src={data.flag}
        />
        <div className='px-2 pt-3 pb-4'>
          <h5 className='font-weight-800 text-21 text-left text-ellipsis'>
            {data.name}
          </h5>
          <ul className='mt-1'>
            {schemaCard.map(schemaCardItem => (
              <li
                className='mb-q'
                key={schemaCardItem.key}>
                <h6 className='font-weight-600 text-14 text-capitalize text-left'>
                  {schemaCardItem.title} :{' '}
                  <span className='font-weight-300'>
                    {schemaCardItem.type === 'number'
                      ? commaSeparateNumber(data[schemaCardItem.key_server])
                      : data[schemaCardItem.key_server]}
                  </span>
                </h6>
              </li>
            ))}
          </ul>
        </div>
      </a>
    </Link>
  </StyledCardCountry>
)

export default CardCountry

const StyledCardCountry = styled.article`
  text-align: center;
  overflow: hidden;
  transition: background-color 0.4s;
  background-color: var(--color-background-secondary);
  color: var(--color-primary);

  .card-country--image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 4/3;
    border-radius: 4px 4px 0 0;
  }
`
