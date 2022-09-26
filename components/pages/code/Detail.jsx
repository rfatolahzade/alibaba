import { memo, useCallback, useEffect, useState } from 'react'
import { getCountryService } from 'api/services/country'
import styled from 'styled-components'
import Button from 'ui-kit/button/Button'
import ui from 'dictionaries/ui'
import Image from 'next/image'
import Head from 'next/head'
import { commaSeparateNumber } from 'helper/helper'
import { breakpointsPX } from 'helper/consts'
import Skeleton from 'ui-kit/skeleton/Skeleton'
import { useRouter } from 'next/router'

const schemaDetailLeft = [
  {
    key: 'native_name',
    title: ui.detail.summary.native_name,
    type: 'string',
    key_server: 'nativeName',
  },
  {
    key: 'population',
    title: ui.detail.summary.population,
    type: 'number',
    key_server: 'population',
  },
  {
    key: 'region',
    title: ui.detail.summary.region,
    type: 'string',
    key_server: 'region',
  },
  {
    key: 'subregion',
    title: ui.detail.summary.sub_region,
    type: 'string',
    key_server: 'subregion',
  },
  {
    key: 'capital',
    title: ui.detail.summary.capital,
    type: 'string',
    key_server: 'capital',
  },
]

const schemaDetailRight = [
  {
    key: 'top_level_down',
    title: ui.detail.summary.top_level_down,
    type: 'list',
    key_server: 'topLevelDomain',
  },
  {
    key: 'currencies',
    title: ui.detail.summary.currencies,
    type: 'list',
    key_server: 'currencies_code',
  },
  {
    key: 'languages',
    title: ui.detail.summary.languages,
    type: 'string',
    key_server: 'languages_name',
  },
]

const Detail = ({ query_server,data_server }) => {
  const [data, onChangeData] = useState(data_server)
  const router = useRouter()
  const getData = useCallback(() => {
    getCountryService(query_server.code).then(res => onChangeData(res))
  }, [query_server?.code])

  useEffect(() => {
    if ((!data && query_server?.code) || (data && router.query.code)) {
      getData()
    }
  }, [query_server?.code, router.query.code])

  return (
    <>
      <Head>
        <title>{[data || data_server].name}</title>
      </Head>
      <StyleDetail className={'d-flex flex-column'}>
        <nav>
          <Button
            icon='arrowLeft'
            href={'/'}
            title={ui.detail.back}
          />
        </nav>

        <detail className={'detail d-grid'}>
          {data ? (
            <>
              <div className={'detail--image'}>
                {data.flag && (
                  <Image
                    alt={[data || data_server].name}
                    width={404}
                    height={303}
                    layout='responsive'
                    loading='lazy'
                    src={[data || data_server].flag}
                  />
                )}
              </div>

              <summary className={'detail--summary my-4'}>
                <h1 className='text-21 mb-3 font-weight-800'>{[data || data_server].name}</h1>
                <div className='detail--summary--list d-grid'>
                  <ul>
                    {schemaDetailLeft.map(schemaDetailLeftItem => (
                      <RowDetail
                        data={data}
                        key={schemaDetailLeftItem.key}
                        schemaDetailItem={schemaDetailLeftItem}
                      />
                    ))}
                  </ul>
                  <ul>
                    {schemaDetailRight.map(schemaDetailRightItem => (
                      <RowDetail
                        data={data}
                        key={schemaDetailRightItem.key}
                        schemaDetailItem={schemaDetailRightItem}
                      />
                    ))}
                  </ul>
                </div>
                {[data || data_server]?.borders && (
                  <div className='detail--summary--borders d-grid'>
                    <h6 className='text-16 font-weight-600 text-capitalize mt-1 detail--summary--borders--title'>
                      {ui.detail.summary.border_countries}:
                    </h6>
                    <div className='detail--summary--borders--list'>
                      {[data || data_server]?.borders?.map(borderItem => (
                        <Button
                          href={`/country/${borderItem?.toLowerCase()}`}
                          key={borderItem}
                          size={'small'}
                          classes={'m-q'}
                          title={borderItem}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </summary>
            </>
          ) : (
            <>
              <Skeleton
                width={600}
                height={447}
              />
              <summary className={'detail--summary my-4'}>
                <Skeleton
                  width={100}
                  height={30}
                />
                <div className='detail--summary--list'>
                  <ul>
                    {schemaDetailLeft.map(schemaDetailLeftItem => (
                      <Skeleton
                        key={schemaDetailLeftItem.key}
                        className='my-q'
                        width={200}
                        height={30}
                      />
                    ))}
                  </ul>
                  <ul>
                    {schemaDetailRight.map(schemaDetailRightItem => (
                      <Skeleton
                        key={schemaDetailRightItem.key}
                        className='my-q'
                        width={200}
                        height={30}
                      />
                    ))}
                  </ul>
                </div>
                {
                  <div className='detail--summary--borders'>
                    <div className='detail--summary--borders--list'>
                      {[...Array(3).keys()].map(arrayItem => (
                        <Skeleton
                          key={arrayItem}
                          className='m-q'
                          width={120}
                          height={30}
                        />
                      ))}
                    </div>
                  </div>
                }
              </summary>
            </>
          )}
        </detail>
      </StyleDetail>
    </>
  )
}

const RowDetail = ({ schemaDetailItem, data }) => (
  <li className='mb-1 detail--summary--list--item'>
    <h6 className='text-16 font-weight-600 text-capitalize'>
      {schemaDetailItem.title}:{' '}
      <span className='font-weight-300'>
        {data[schemaDetailItem.key_server] &&
          (schemaDetailItem.type === 'number'
            ? commaSeparateNumber(data[schemaDetailItem.key_server])
            : schemaDetailItem.type === 'list'
            ? data[schemaDetailItem.key_server].join(',')
            : data[schemaDetailItem.key_server])}
      </span>
    </h6>
  </li>
)

const areEqual = (prevProps, nextProps) =>
  JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data) &&
  JSON.stringify(prevProps.schemaDetailItem) ===
    JSON.stringify(nextProps.schemaDetailItem)

memo(RowDetail, areEqual)

export default Detail

const StyleDetail = styled.section`
  margin-top: 5rem;

  .detail {
    margin-top: 5rem;
    column-gap: 7.5rem;
    grid-template-columns: repeat(2, 1fr);

    .detail--image {
      img {
        object-fit: cover;
        aspect-ratio: 4/3;
      }
    }

    .detail--summary {
      .detail--summary--list {
        column-gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr);
      }

      .detail--summary--borders {
        margin-top: 5rem;
        grid-template-columns: repeat(12, 1fr);

        .detail--summary--borders--title {
          grid-column: span 3;
        }

        .detail--summary--borders--list {
          grid-column: span 9;
          display: flex;
          flex-flow: row wrap;
        }
      }
    }
  }

  @media (max-width: ${breakpointsPX.mobile}) {
    margin-top: 3rem;

    .detail {
      grid-template-columns: repeat(1, 1fr);

      .detail--summary {
        margin-top: 4rem;

        .detail--summary--list {
          display: flex;
          flex-direction: column;

          ul:first-child {
            margin-bottom: 2rem;
          }
        }

        .detail--summary--borders {
          display: flex;
          flex-direction: column;

          .detail--summary--borders--list {
            margin-top: 1rem;
            margin-left: -0.5rem;
          }
        }
      }
    }
  }
`
